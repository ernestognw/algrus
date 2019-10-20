import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Loader from "components/common/loader";
import Typography from "components/common/typography";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  ContentContainer,
  Input,
  DropDownContainer,
  LoaderContainer,
  ResultItem
} from "./elements";

const GooglePlaces = ({ value, handleChange, handleSelect, placeholder }) => (
  <PlacesAutocomplete
    value={value}
    onChange={handleChange}
    onSelect={handleSelect}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <ContentContainer>
        <Input
          value={value}
          {...getInputProps({
            placeholder: placeholder,
            className: "location-search-input"
          })}
        />
        <DropDownContainer>
          {loading ? (
            <LoaderContainer>
              <Loader marginT="30" marginB="30" />
            </LoaderContainer>
          ) : (
            suggestions.map(suggestion => (
              <ResultItem
                key={shortid.generate()}
                active={suggestion.active}
                {...getSuggestionItemProps(suggestion)}
              >
                <Typography variant="heading" font="light">
                  {suggestion.description}
                </Typography>
              </ResultItem>
            ))
          )}
        </DropDownContainer>
      </ContentContainer>
    )}
  </PlacesAutocomplete>
);

GooglePlaces.defaultProps = {
  handleChange: undefined,
  placeholder: "Enter place"
};

GooglePlaces.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleSelect: PropTypes.func.isRequired
};

export default GooglePlaces;
