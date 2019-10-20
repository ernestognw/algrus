import styled from 'styled-components';

const GoogleMapContainer = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  margin-top: ${props => props.marginT}px;
  margin-bottom: ${props => props.marginB}px;
`;

export default GoogleMapContainer;
