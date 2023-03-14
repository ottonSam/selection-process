import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  width: 100%;
  margin: auto;
  padding-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled.p`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
