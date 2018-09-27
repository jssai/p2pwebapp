import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, defineMessages } from 'react-intl';
import { createSelector } from 'reselect';
import JoinList from 'components/JoinList';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import Images from 'images';
import './style.scss';

// default messages
const messages = defineMessages({
  logo: {
    id: 'app',
    defaultMessage: 'CarShearing'
  },
  signup: {
    id: 'signUp',
    defaultMessage: 'Sign up'
  },
  signin: {
    id: 'signIn',
    defaultMessage: 'Sign In'
  },
  copyright: {
    id: 'app.footer.copyright',
    defaultMessage: 'Copyright© 2018 CarShearing'
  }
});

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content">
                <div className="logo">
                  <a href="/">
                    <img
                      src={Images.logoBlack}
                      className="logoImage"
                      alt="logo"
                    />
                  </a>
                </div>
                <ul className="menu">
                  {/* <li>
                    <div className="SelectLanguage">
                      <img
                        src={Images.flag}
                        alt="flag"
                        onClick={() => {
                          // this.props.onLocaleChange(this.props.locale !== 'en' ? 'en' : 'de');
                        }}
                      />
                    </div>
                  </li>
                  <li>
                    <a><FormattedMessage {...messages.signup} /></a>
                  </li>
                  <li>
                    <a><FormattedMessage {...messages.signin} /></a>
                  </li> */}
                  <JoinList />
                </ul>
              </div>
              <div className="copyright">
                <FormattedMessage {...messages.copyright} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  locale: PropTypes.string,
  onLocaleChange: PropTypes.func
};

const mapStateToProps = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));

function mapDispatchToProps(dispatch) {
  return {
    onLocaleChange: (locale) => dispatch(changeLocale(locale))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
