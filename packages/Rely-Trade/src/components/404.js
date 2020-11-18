import React from 'react';
import { connect, styled } from 'frontity';

const description404 = (
    <>
       That page can’t be found{" "}
       <span role="img" aria-label="confused face">
         😕
       </span>
    </>
 );

 const description = (
    <>
       Don&apos;t panic! Seems like you encountered an error. If this persists,
       <a href="https://ojjomedia.com"> let us know </a> or try refreshing
       your browser.
    </>
 )

const Page404 = ({ state }) => {
    const data = state.source.get(state.router.link);
    const title = "Oops! Something Went Wrong";
    const title404 = "Oops! 404";
    return (
        <div>
            <MainContainer className="mt-5 p-4">
                <Title> { data.is404 ? title404 : title } </Title>
                <Description> { data.is404 ? description404 : description } </Description>
            </MainContainer>
        </div>
    )
}

export default connect(Page404);

const MainContainer = styled.div`

`
const Title = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`;
const Description = styled.div`
  line-height: 1.6em;
  margin: 18px 0;
  text-align: center;
`;