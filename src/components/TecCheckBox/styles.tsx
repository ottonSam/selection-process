import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CheckBoxContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-top: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;
