import styled from "styled-components";


const StyledDiv = styled.div`
  width: 50%;
  height: 50%;
  background-color: beige;
  `;

const StyledHeader = styled.h2`
  color: coral;

`;

export default function Child(){
  return (
    <StyledDiv>
      <StyledHeader>My name is Favor Wariboko and I like to eat.</StyledHeader>
    </StyledDiv>
  )
}