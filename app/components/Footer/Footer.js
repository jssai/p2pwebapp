import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import './style.scss';

// default messages
const messages = defineMessages({
  footer: {
    id: 'app.footer',
    defaultMessage: 'copyright 2018'
  }
});

const Footer = () => (
  <footer>
    <h5>
      <FormattedMessage {...messages.footer} />
    </h5>
  </footer>
);

export default Footer;
