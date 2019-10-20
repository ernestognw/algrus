import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-500px);
    opacity: 0.5;
  }

  to {
      transform: translateY(0);
      opacity: 1;
  }
`;

const animationIn = css`
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => (props.zIndex ? props.zIndex : '3000')};
  position: fixed;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
`;

const PseudoContainer = styled.div`
  position: absolute;
  z-index: 3100;
  background: transparent;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalBox = styled.div`
  margin: 48px;
  display: flex;
  align-items: center;
  jusitfy-content: center;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  z-index: 3200;
  flex-direction: column;
  flex: 0 1 auto;
  max-width: 200px;
  ${props => props.animate && animationIn};
`;

const ContentBody = styled.div`
  padding: 20px;
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { ModalContainer, PseudoContainer, ModalBox, ContentBody };
