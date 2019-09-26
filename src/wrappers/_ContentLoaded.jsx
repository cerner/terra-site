import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ContentLoaded.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const ContentLoaded = ({ children, className }) => {
  useEffect(() => {
    if (!window.location || window.location.length < 2) {
      return;
    }
    const elementName = window.location.hash.slice(1);
    console.log('elementName', elementName);
    const element = document.getElementById(elementName);
    console.log('element', element);
    if (element) {
      element.scrollIntoView();
    }
  });
  return (
    <div
      id="site"
      data-terra-dev-site-content
      className={`${cx('dev-site-content')} ${className}`}
    >
      {children}
    </div>
  );
};

ContentLoaded.propTypes = propTypes;

export default ContentLoaded;
