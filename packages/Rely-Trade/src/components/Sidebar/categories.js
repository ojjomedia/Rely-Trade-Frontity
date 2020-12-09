import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaList } from 'react-icons/fa';

const Menu = ({options, currentPageLink, submenu}) => (
    <BodyList submenu={submenu} className={submenu && "subMenu"}>
      {options.map(({name, link, submenu}) => {
        // Check if the link matched the current page url
        const isCurrentPage = currentPageLink === link;
        return (
          <BodyItem key={name}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <ItemLink
              href={link}
              aria-current={isCurrentPage ? "category" : undefined}
            >
              {name} <span className="float-right"> <MdKeyboardArrowRight /> </span>
            </ItemLink>
            { submenu && <Menu options={submenu} currentPageLink={currentPageLink} submenu/> }
          </BodyItem>
        );
      })}
    </BodyList>
  )

const Categories = ({ state, className }) => {
    const category = state.theme.categorires;
    const { primary } = state.theme.colors;
    const { lighttext, light } = state.theme.colors.gray;
    return (
        <MainBody className={className}>
            <TitleSection bg={primary}>
                <TitleIcon>
                    <FaList color={lighttext} />
                </TitleIcon>
                <Title color={lighttext}>Categories</Title>
            </TitleSection>
            <Body color={light}>
                <Menu options={category} currentPageLink={state.router.link} />
            </Body>
        </MainBody>
    )
}

export default connect(Categories);

const MainBody = styled.div`
    margin-bottom: 35px;
`
const TitleSection = styled.div`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.bg};
`
const TitleIcon = styled.div`
    padding: 6px 18px;
    display: inherit;
    background: rgba(0, 0, 0, 0.19);
    & svg {
        width: 22px;
        height: auto;
    }
`
const Title = styled.h3`
    color: ${(props) => props.color};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 15px;
`
const Body = styled.div`
    border: 1px solid;
    border-color: ${(props) => props.color};
`
const BodyItem = styled.li`
    list-style: none;
`
const ItemLink = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    line-height: 42px;
    display: block;
    padding: 0 15px;
    text-transform: uppercase;
    & :hover, & [aria-current="category"], & :focus {
        text-decoration: none;
    }
  @media (max-width: 800px) {
    &[aria-current="category"] + .subMenu  {
      display: inline-grid !important;
      position: inherit !important;
      visibility: visible;
      left: 100%;
      opacity: 1;
      transform: translateY(0);
      justify-content: inherit !important;
    }
  }
`
const BodyList = styled.ul`
  flex-direction: ${({submenu}) => submenu && 'column'};
  visibility: ${({submenu}) => submenu && 'hidden'};
  position: ${({submenu}) => submenu && 'absolute'};
  width: ${({submenu}) => submenu && '100%'};
  left: ${({submenu}) => submenu && '50%'};
  margin: ${({submenu}) => submenu && '0'};
  margin-top: ${({submenu}) => submenu && '-40px'} !important;
  z-index: 999;
  z-index: ${({submenu}) => submenu && '5'};
  background: ${({submenu}) => submenu && '#fff'};
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: ${({submenu}) => submenu ? '10px' : 0};
  transition: all .5s ease;
  opacity: ${({submenu}) => submenu && 0};

  ${BodyItem}:hover & {
    visibility: ${({submenu}) => submenu && 'visible'};
    left: ${({submenu}) => submenu && '100%'};
    opacity: ${({submenu}) => submenu && '1'};
    transform: ${({submenu}) => submenu && 'translateY(0)'};
  }

  @media (min-width: 1220px) {
    margin-right: 0px;
    margin-bottom: 0px;
  }
`