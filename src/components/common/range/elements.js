import styled from "styled-components";

const Container = styled.div`
  .input-range {
    margin-top: 35px;
  }
  .input-range__slider {
    appearance: none;
    background: ${props => props.theme.color.secondary};
    border: 1px solid ${props => props.theme.color.secondary};
    border-radius: 100%;
    cursor: pointer;
    display: block;
    margin-left: -0.5rem;
    margin-top: -0.75rem;
    outline: none;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    height: 1.3rem;
    width: 1.3rem;
  }

  .input-range__slider:active {
    transform: scale(1.3);
  }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
  }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none;
  }

  .input-range__slider-container {
    transition: left 0.3s ease-out;
  }

  .input-range__label {
    color: #aaaaaa;
    font-family: "Helvetica Neue", san-serif;
    font-size: 0.85rem;
    transform: translateZ(0);
    white-space: nowrap;
  }

  .input-range__label--min,
  .input-range__label--max {
    bottom: -1.4rem;
    position: absolute;
  }

  .input-range__label--min {
    left: 0;
  }

  .input-range__label--max {
    right: 0;
  }

  .input-range__label--value {
    position: absolute;
    top: -2rem;
  }

  .input-range__label-container {
    left: -50%;
    position: relative;
  }
  .input-range__label--max .input-range__label-container {
    left: 50%;
  }

  .input-range__track {
    background: #eeeeee;
    border-radius: 0.4rem;
    cursor: pointer;
    display: block;
    height: 0.3rem;
    position: relative;
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }

  .input-range--disabled .input-range__track {
    background: #eeeeee;
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: ${props => props.theme.color.secondary};
  }

  .input-range {
    height: 1rem;
    position: relative;
    width: 100%;
  }

  ${props => props.theme.media.tablet`
    .input-range__slider {
      height: 1.5rem;
      width: 1.5rem;    
      margin-top: -1.1rem;
    }

    .input-range__label--value {
		  top: -2.5rem;
    }
    
    .input-range__track {
      height: 0.6rem;
    }
  `}

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
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
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
`;

export default Container;
