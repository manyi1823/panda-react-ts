import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  & > input {
    padding: 8px 12px;
    outline: unset;
    border: 2px solid #919191;
    border-radius: 8px;
    width: 100%;
    background: transparent;
  }
  @media (min-width: 768px){
    & > input{
        padding: 12px;
    }
  }
`;