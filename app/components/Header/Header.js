import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';
import Images from 'images';
import scrollToElement from 'scroll-to-element';
import { connect } from 'react-redux';
import ScrollToTop from 'components/ScrollToTop';
import { createSelector } from 'reselect';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

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
  faq: {
    id: 'faqThis',
    defaultMessage: 'FAQ This!'
  },
  join: {
    id: 'joinList',
    defaultMessage: 'Join Waiting List'
  }
});


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  goToFaq = () => {
    scrollToElement(document.getElementById('#faq'), {
      offset: 0,
      ease: 'linear',
      duration: 1000
    });
  }
  openModal = () => {
    // alert('lol');
  }

  render() {
    return (
      <header className="header">
        <ScrollToTop />
        <div className="container">
          <div className="logo">
            <a href="/">
              <img
                src={Images.logo}
                className="logoImage"
                alt="logo"
              />
            </a>
          </div>
          <nav className="navbar-menu">
            <ul>
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
              <li>
                <a role="link" onClick={this.openModal}><FormattedMessage {...messages.join} /></a>
              </li>
              <li>
                <a role="link" onClick={this.goToFaq}><FormattedMessage {...messages.faq} /></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
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
)(Header);
