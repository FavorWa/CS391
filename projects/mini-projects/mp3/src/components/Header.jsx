import { Link as RouterLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


const StyledNav = styled.nav`
  margin-bottom: 10px;
`;

const StyledLogo = styled.img`
  height: 60px;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;

const StyledRouterLink = styled(RouterLink)`
  color: #61dafb;
  margin-right: 10px;
`;


function Header({ logo }) {
  return (
    <StyledHeader>
    <StyledLogo src={logo} alt='logo' />
    <h1>My Portfolio</h1>
    <StyledNav>
      <StyledRouterLink to='/'>About me</StyledRouterLink>
      <StyledRouterLink to='/projects'>Projects</StyledRouterLink>
    </StyledNav>
  </StyledHeader>
  );
}

export default Header;