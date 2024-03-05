import styled from 'styled-components';

const StyledLink = styled.a`
  color: #61dafb;
`;

export default function Link({ url, title }) {
  return (
    <StyledLink
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </StyledLink>
  );
};

