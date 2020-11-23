import React, { useEffect } from "react";
import { connect, styled } from "frontity";

/*
 * Link Component
 * Link are passing to every components
 * Author: ojjomedia <info@ojjomedia.com>
 */

const Link = ({ state, actions, href, children, "aria-current": ariaCurrent, Active, className, rel }) => {
  const isExternal = href.startsWith("http");
  const { primary, text } = state.theme.colors;
  const onMouseEnter = () => {
    // Set the router to auto data fetch
    if(state.theme.autoPreFetch === "hover" && !isExternal);
      actions.source.fetch(href);
  }
  {state.theme.autoPreFetch === "hover" && (
    useEffect(() => {
      const isitExternal = href.startsWith("http");
      if(state.theme.autoPreFetch === "hover" && !isitExternal);
        actions.source.fetch(href);
    }, [])
  )}
  const onClick = (event) => {
    event.preventDefault();
    // Set the router to new url
    actions.router.set(href);

    window.scrollTo(0, 0);
  };
  return (
    <Item href={href} onClick={onClick} hover={primary} color={text} className={className} active={Active} aria-current={ariaCurrent} rel={isExternal ? "noopener noreferrer" : rel} onMouseEnter={onMouseEnter}>
      {children}
    </Item>
  );
};

export default connect(Link);

const Item = styled.a`
    color: ${(props) => props.color} !important;
    font-weight: 500;

    & :hover, &[aria-current="active"], & :focus {
        text-decoration: none;
        color: ${(props) => props.hover} !important;
    }
`
