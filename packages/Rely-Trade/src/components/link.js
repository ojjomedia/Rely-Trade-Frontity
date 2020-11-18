import React, { useEffect } from "react";
import { connect } from 'frontity';

const Link = ({ state, href, actions, children, "aria-current": ariaCurrent, Active, rel, className }) => {

    // Check if the link is an external or internal link
    // const isExternal = href.startsWith("http");

    // // Prefetch the link's content when it mounts and autoPreFetch is set to `true`
    // useEffect(() => {
    //     if (!isExternal) {
    //     if (state.theme.autoPreFetch === "all") actions.source.fetch(link);
    //     }
    // }, []);

    const onClick = (e) => {
        e.preventDefault();
        // set the router to new url
        actions.router.set(href);

        window.scrollTo(0, 0);
    }
    
    // const onMouseEnter = () => {
    //     // Prefetch the link's content when the user hovers on the link
    //     if (state.theme.autoPreFetch === "hover" && !isExternal)
    //       actions.source.fetch(href);
    // }
    return (
        <>
           <a href={href} className={className} onClick={onClick} active={Active} aria-current={ariaCurrent} >
            {children}
           </a> 
        </>
    )
}

export default connect(Link);
