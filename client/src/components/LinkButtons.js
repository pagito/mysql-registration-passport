import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { linkStyle } from './ButtonStyles';

export default class LinkButtons extends Component {
  static defaultProps = {
    link: '/',
  };

  render() {
    const { buttonText, buttonStyle, link } = this.props;
    return (
      <Fragment>
        <Link style={linkStyle} to={link}>
          <Button variant="contained" color="primary" style={buttonStyle}>
            {buttonText}
          </Button>
        </Link>
      </Fragment>
    );
  }
}
