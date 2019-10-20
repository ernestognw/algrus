import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper, LoaderContainer } from './elements';

const Loader = ({ size, alignSelf, className, marginT, marginL, marginR, marginB }) => (
  <LoaderWrapper
    className={className}
    size={size}
    alignSelf={alignSelf}
    marginT={marginT}
    marginL={marginL}
    marginR={marginR}
    marginB={marginB}
  >
    <div />
    <div />
    <div />
    <div />
  </LoaderWrapper>
);

Loader.defaultProps = {
  size: null,
  alignSelf: null,
  className: null,
  marginT: null,
  marginL: null,
  marginR: null,
  marginB: null
};

Loader.propTypes = {
  size: PropTypes.string,
  alignSelf: PropTypes.string,
  className: PropTypes.string,
  marginT: PropTypes.string,
  marginL: PropTypes.string,
  marginR: PropTypes.string,
  marginB: PropTypes.string
};

export { LoaderContainer };

export default Loader;
