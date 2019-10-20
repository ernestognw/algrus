import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import {
  StepperContainer,
  StepContainer,
  TextContainer,
  IconContainer,
  Icon,
  Title,
  Description
} from './elements';

const Steps = ({ children, current, color, goToPrevious }) => (
  <StepperContainer>
    {children.map((child, index) =>
      React.cloneElement(child, {
        ...child.props,
        key: shortId.generate(),
        index: index + 1,
        last: index + 1 === children.length,
        current: index === current - 1,
        passed: index < current - 1,
        go: goToPrevious,
        color
      })
    )}
  </StepperContainer>
);

const StepContent = ({ children, current }) => (
  <Fragment>{children.map((child, index) => current - 1 === index && child)}</Fragment>
);

const Step = ({ icon, title, description, index, last, current, passed, color, go }) => (
  <StepContainer passed={passed} onClick={() => passed && go(index)} last={last}>
    <IconContainer color={color} passed={passed} current={current}>
      <Icon>{icon || index}</Icon>
    </IconContainer>
    <TextContainer>
      <Title color={color} fillLine={passed} last={last}>
        {title}
      </Title>
      <Description>{description}</Description>
    </TextContainer>
  </StepContainer>
);

Steps.propTypes = {
  children: PropTypes.any.isRequired,
  current: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  goToPrevious: PropTypes.func.isRequired
};

StepContent.propTypes = {
  children: PropTypes.any.isRequired,
  current: PropTypes.bool.isRequired
};

Step.defaultProps = {
  icon: null
};

Step.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  passed: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  current: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export { Steps, Step, StepContent };
