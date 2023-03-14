import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextBox = styled.div`
  position: relative;
  max-width: 700px;
`;

export const Title2 = styled.h2`
  font-size: 2em;
  line-height: 1.4em;
  font-weight: 500;
`;

export const Title3 = styled.h3`
  margin-top: 2rem;
  font-size: 1.5em;
  line-height: 1.4em;
  font-weight: 500;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2em;
  font-weight: 900;
`;

export const Body1 = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  margin: 0 0 1rem 2rem;
  padding: 0.5rem 0 0.5rem 1rem;
  font-size: 1rem;
`;

export const GoFormButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 8px 20px;
  font-size: 1.2rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
`;

export const ImageBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 380px;
  max-height: 380px;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  clip-path: circle(600px at right 900px);
  @media (max-width: 1000px) {
    display: none;
  }
`;
