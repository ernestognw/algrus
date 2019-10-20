import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import DefaultSelect from 'react-select';
import Container from './elements';

const Select = ({
  variant,
  options,
  defaultValue,
  isSearchable,
  isClearable,
  placeholder,
  onInputChange,
  onChange,
  marginL,
  marginT,
  marginB,
  marginR
}) => {
  const props = {
    variant,
    options,
    defaultValue,
    isSearchable,
    isClearable,
    placeholder,
    onInputChange,
    onChange
  };

  return (
    <Container marginL={marginL} marginT={marginT} marginB={marginB} marginR={marginR}>
      {variant === 'default' && <DefaultSelect {...props} />}
      {variant === 'searchable' && <CreatableSelect {...props} />}
    </Container>
  );
};

Select.propTypes = {
  marginL: PropTypes.string,
  marginT: PropTypes.string,
  marginB: PropTypes.string,
  marginR: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
  // Variant should support more types in future
  variant: PropTypes.oneOf(['default', 'searchable'])
};

Select.defaultProps = {
  placeholder: '',
  variant: 'default',
  isSearchable: false,
  isClearable: false,
  defaultValue: undefined,
  onInputChange: () => {},
  marginL: null,
  marginT: null,
  marginB: null,
  marginR: null
};

export default Select;
