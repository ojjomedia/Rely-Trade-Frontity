import React from 'react'
import { connect, styled } from 'frontity'
import { Container, Row, Col, Image, Nav, Navbar, Tabs, Tab } from "react-bootstrap";
import Link from '../../link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Categories from '../../Sidebar/categories';
import SocialIcon from '../Social-icon';
import SearchForm from '../Middle/search-form';
import ContactInfo from '../Middle/contact-info';

const MobileNavBar = ({ state, closeNavBar }) => {
    const Site = state.frontity;
    const menu = state.theme.menu;
    const isThereLink = menu != null && menu.length > 0;
    return (
    <SideNavContainer id="mainbody" className="">
      <SideNavOverlay onClick={closeNavBar} />
      <Main id="mySidenav" className="">
        <SideNavContent id="content">
          <SideNavHeader>
            <Container className="mb-3 p-0">
              <Row>
                <Col md={9} xs={9}>
                  <SideNavTitle>{Site.title}</SideNavTitle>
                </Col>
                <Col md={3} xs={3} className="d-table-cell">
                  <CloseButton className="" onClick={closeNavBar}>&times;</CloseButton>
                </Col>
              </Row>
            </Container>
            <SearchForm />
          </SideNavHeader>
          <SideNavBody>
            <Container md="fluid" className="p-0 w-100">
              <Row>
                <Col className="p-0">
                <Tabs defaultActiveKey="menu" id="uncontrolled-tab-example">
                <Tab eventKey="menu" title="Menu">
                    <Section>
                        <Navbar variant="dark">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    {
                                        isThereLink && menu.map(([name, link]) => {
                                            const isCurrentPage = state.router.link === link;
                                            return(
                                                <Link key={name} href={link} className="nav-link" aria-current={isCurrentPage ? "active" : undefined}>{name} <span className="float-right"> <MdKeyboardArrowRight /> </span></Link>
                                            )
                                        })
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Section>
                </Tab>
                <Tab eventKey="categories" title="Categories">
                    <Categories />
                </Tab>
                </Tabs>
                </Col>
              </Row>
            </Container>
            <ContactInfo />
          </SideNavBody>
          <SideNavFooter>
            <SocilMain>
              <SocilWorp>
                <SocialIcon />
              </SocilWorp>
            </SocilMain>
          </SideNavFooter>
        </SideNavContent>
      </Main>
    </SideNavContainer>
    )
}

export default connect(MobileNavBar);

const Section = styled.div`
    background-color: ${(props) => props.bg};
    padding: 0px;
    & .navbar  {
        padding: 0px;
    }
    & .navbar-nav {
        margin: 0 auto;
        display: inline-block;
        width: 100%;
        border: 1px solid #dee2e6;
    }
    & .nav-link{
        font-size: 14px;
        font-weight: 500;
        padding: 13px 20px 15px 20px !important;
        border-bottom: 1px solid #dee2e6;
        text-transform: uppercase;
        transition: all ease-in-out .3s;
        color: #666 !important;
    }
    & .nav-link:last-child {
        border-right: 0px;
    }
    & .nav-link:hover, & [aria-current="active"], & :focus {
        color: #7eb942 !important;
    }
`
const SideNavContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: #fff !important;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  z-index: -1;
  overflow-y: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%;
  #content {
    z-index: 1099;
  }
  .show {
    width: 400px;
    @media (max-width: 450px) {
      width: 360px;
    }
  }
`
const Main = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1010;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  @media (max-height: 450px){
    padding-top: 15px;
    font-size: 18px;
  }
`
const SideNavOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
`
const SideNavHeader = styled.div`
  background: #FAFAFA;
  padding: 15px;
  color: #222 !important;
`
const SideNavBody = styled.div`


    & .nav-tabs{
        border-top: 1px solid #dee2e6;
        display: flex;
        margin-bottom: 20px;
        background: #FAFAFA;
    }
    & .nav-item{
        border: none;
        border-right: 1px solid #dee2e6;
        width: 50%;
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: 600;
        color: #666;
        & :last-child {
            border-right: none;
        }
    }
    & .nav-tabs .nav-link.active{
        color: #7eb942;
        border-bottom: 1px solid;
        border-color: #dee2e6 #dee2e6 #dee2e6;
    }
`
const SideNavFooter = styled.div`
  background: #FAFAFA;
  padding: 10px 30px;
  color: #222 !important;
  width: 400px;
  position: fixed;
  bottom: 0px;
  @media (max-width: 400px){
      width: 100%;
  }
`
const SideNavContent = styled.div`

`
const SideNavTitle = styled.h5`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`
const CloseButton = styled.a`
  cursor: pointer;
  color: #222 !important;
  font-size: 28px;
  font-weight: bold;
  line-height: 27px;
  float: right;
`
const OwnImg =styled(Image)`
  width: 55%;
  border: 10px solid white;
  margin-bottom: 15px;
`
const OwnName = styled.h3`
  line-height: 38px;
  font-weight: bold;
`
const OwnPost = styled.h5`
  font-size: 18px;
  line-height: 38px;
`
const OwnContent = styled.p`

`
const SocilMain = styled.div`
  
`
const SocilWorp = styled.div`
  & svg {
    width: 28px;
    height: 28px;
  }
`
const SocileLink = styled.a`
  display: inline-block;
  padding: 10px;
  line-height: 0;
  margin-right: 10px;
  & :last-child {
    margin-right: 0px;
  }
`