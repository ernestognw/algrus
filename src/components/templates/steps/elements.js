import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  width: 100%;

  ${props => props.theme.media.tablet`
    flex-direction: column;
  `}
`;

const StepContainer = styled.div`
  display: flex;
  margin-right: 10px;
  flex: 1 1;
  overflow: hidden;
  ${props =>
    props.passed &&
    `
    cursor: pointer;
  `}

  ${props => props.theme.media.tablet`
    margin-bottom: 10px;
  `}

  ${props =>
    props.last &&
    `
      flex: none;
      margin-right: 0;
  `}
`;

const TextContainer = styled.div`
  margin-top: 3px;
  display: inline-block;
  vertical-align: top;
`;

const IconContainer = styled.div`
  border: 1px solid
    ${props =>
      props.passed
        ? props.color
          ? props.theme.color[props.color]
          : props.theme.color.default
        : props.theme.grey.veryLightGrey};
  width: 26px;
  min-width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 26px;
  font-size: 14px;
  margin-right: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  color: ${props =>
    props.passed
      ? props.color
        ? props.theme.color[props.color]
        : props.theme.color.default
      : props.theme.grey.lightGrey};

  ${props =>
    props.current &&
    `
    background-color: ${props.color ? props.theme.color[props.color] : props.theme.color.default};
    color: #fff;
    border: 1px solid ${props.color ? props.theme.color[props.color] : props.theme.color.default};
  `}
`;

const Icon = styled.span`
  font-size: 12px;
  position: relative;
  top: -2px;
`;

const Title = styled.div`
  font-size: 14px;
  font-family: ${props => props.theme.font.medium};
  color: ${props => props.theme.color.default};
  font-weight: bold;
  display: inline-block;
  padding-right: 10px;
  position: relative;

  ${props =>
    !props.last &&
    `
    &::after {
      content: "";
      height: 1px;
      width: 1000px;
      background-color: ${
        props.fillLine
          ? props.color
            ? props.theme.color[props.color]
            : props.theme.color.default
          : props.theme.grey.veryLightGrey
      };
      display: block;
      position: absolute;
      top: 0.55em;
      left: 100%;
    }
  `}
`;

const Description = styled.div`
  font-size: 10px;
  max-width: 200px;
  margin-top: 5px;
  color: ${props => props.theme.grey.lightGrey};
`;

export { StepperContainer, StepContainer, TextContainer, IconContainer, Icon, Title, Description };
