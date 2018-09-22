import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import './style.scss';

class MyAccordion extends React.PureComponent {
  render() {
    const { messages } = this.props;
    return (
      <Accordion>
        { // eslint-disable-next-line
          Object.keys(messages).map((item) => {
            return (
              <AccordionItem key={item}>
                <AccordionItemTitle>
                  <FormattedMessage {...messages[item].title} />
                  <span className="accordion__arrow" aria-expanded="true">+</span>
                  <span className="accordion__arrow" aria-expanded="false">-</span>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <FormattedMessage {...messages[item].answer} />
                </AccordionItemBody>
              </AccordionItem>
            );
          })
        }
      </Accordion>
    );
  }
}

MyAccordion.propTypes = {
  messages: PropTypes.object
};

export default MyAccordion;
