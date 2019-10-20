import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from 'components/templates/modal-portal';
import Typography from 'components/common/typography';
import Loader from 'components/common/loader';
import { ModalContainer, ModalBox, PseudoContainer, ContentBody } from './elements';

class ModalLoader extends Component {
  componentDidUpdate = prevProps => {
    const { active } = this.props;
    const { body } = document;
    if (prevProps.active !== active) {
      if (active) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = null;
      }
    }
  };

  componentWillUnmount = () => {
    document.body.style.overflow = null;
  }

  render() {
    const { active, message } = this.props;
    return (
      <Fragment>
        {active && (
          <ModalPortal>
            <ModalContainer>
              <ModalBox animate={active}>
                <ContentBody>
                  <Loader />
                  {message && (
                    <Typography marginT="20" variant="muted" align="center">
                      {message}
                    </Typography>
                  )}
                </ContentBody>
              </ModalBox>
              <PseudoContainer />
            </ModalContainer>
          </ModalPortal>
        )}
      </Fragment>
    );
  }
}

ModalLoader.defaultProps = {
  message: null
};

ModalLoader.propTypes = {
  active: PropTypes.bool.isRequired,
  message: PropTypes.string
};

export default ModalLoader;
