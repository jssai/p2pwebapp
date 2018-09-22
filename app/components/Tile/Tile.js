import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './style.scss';

class Tile extends React.PureComponent {
  render() {
    const { messages, image } = this.props;
    return (
      <div className="tile">
        {
          messages.title ?
            <h4 className="tile-header">
              <FormattedMessage {...messages.title} />
            </h4> :
            null
        }
        <img className="tile-image" src={image} alt="tile" />
        <div className="tile-description">
          <FormattedMessage {...messages.description} />
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  messages: PropTypes.object,
  image: PropTypes.any
};

export default Tile;
