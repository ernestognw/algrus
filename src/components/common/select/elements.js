import styled from 'styled-components';

const Container = styled.div`
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};

  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};

  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
`;

export default Container;
