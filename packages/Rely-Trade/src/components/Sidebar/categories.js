import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaList } from 'react-icons/fa';

const Menu = ({options, currentPageLink, submenu}) => (
    <StyledMenu submenu={submenu} className={submenu && "subMenu"}>
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
    </StyledMenu>
  )

const Categories = ({ state }) => {
    const category = state.theme.categorires;
    const isThereLink = category != null && category.length > 0;
    const { primary, text } = state.theme.colors;
    const { lighttext, light } = state.theme.colors.gray;
    return (
        <MainBody>
            <TitleSection bg={primary}>
                <TitleIcon>
                    <FaList color={lighttext} />
                </TitleIcon>
                <Title color={lighttext}>Categories</Title>
            </TitleSection>
            <Body color={light}>
                {/* <BodyList>
                        {
                            isThereLink && category.map(([name, link]) => {
                                const isCurrentPage = state.router.link === link;
                                return(
                                    <BodyItem key={name}>
                                        <ItemLink href={link} hover={primary} bg={light} color={text} aria-current={isCurrentPage ? "category" : undefined}>{name} <span className="float-right"> <MdKeyboardArrowRight /> </span></ItemLink>
                                    </BodyItem>
                                )
                            })
                        }
                </BodyList> */}
                <Menu options={state.theme.categorires} currentPageLink={state.router.link} />
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
const BodyList = styled.ul`
    padding: 0px;
    visibility: ${({submenu}) => submenu && 'hidden'};
    position: ${({submenu}) => submenu && 'absolute'};
    /* ${BodyItem}:hover & {
        visibility: ${({submenu}) => submenu && 'visible'};
        width: ${({submenu}) => submenu && '100%'};
        left: ${({submenu}) => submenu && '100%'};
        z-index: ${({submenu}) => submenu && '999'};
        background: ${({submenu}) => submenu && '#fff'};
    } */
    & :hover {
        
    }
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
    /* color: ${(props) => props.color} !important; */
    & :hover .subMenu {
        visibility: ${({submenu}) => submenu && 'visible'} !important;
    }
    & :hover, & [aria-current="category"], & :focus {
        text-decoration: none;
        /* background-color: ${(props) => props.bg};
        color: ${(props) => props.hover} !important; */
    }
`
const StyledMenu = styled.ul`
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