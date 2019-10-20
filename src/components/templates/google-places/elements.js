import styled from "styled-components";

const ContentContainer = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
`;

const Input = styled.input`
  background-color: #fff;
  font-family: ${props => props.theme.font.light};
  font-size: 0.875rem;
  border-radius: 5px;
  flex-grow: 1;
  width: 100%;
  border: 1px solid ${props => props.theme.grey.lightGrey};
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.secondary};
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 2.4rem;
  border-bottom-left-radius: ${props => props.theme.radius};
  border-bottom-right-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.shadow};
  overflow: hidden;
  background-color: #fff;
`;

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ResultItem = styled.div`
  cursor: pointer;
  padding: 10px 0.7rem;
  border-bottom: 1px solid ${props => props.theme.grey.veryLightGrey};
  background: #fff;
  ${props =>
    props.active &&
    `
		background: ${props.theme.grey.veryLightGrey};
	`};
`;

export {
  ContentContainer,
  Input,
  DropDownContainer,
  LoaderContainer,
  ResultItem
};
