import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ThemeContext } from 'terra-application/lib/theme';
import IconChevronLeft from 'terra-icon/lib/icon/IconChevronLeft';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import * as KeyCode from 'keycode-js';
import styles from './ExampleTemplate.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The example component.
   */
  example: PropTypes.element,
  /**
   * The example source code.
   */
  exampleSrc: PropTypes.element,
  /**
   * The example source css.
   */
  exampleCssSrc: PropTypes.element,
  /**
   * The example title.
   */
  title: PropTypes.string,
  /**
   * The example description.
   */
  description: PropTypes.node,

  isExpanded: PropTypes.bool,
  // isCssExpanded: PropTypes.bool,
};

const defaultProps = {
  isExpanded: false,
};

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */
const enableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */
const disableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

const ExampleTemplate = ({
  example, exampleSrc, exampleCssSrc, title, description, isExpanded,
}) => {
  let isCssExpanded;
  const [codeIsVisible, setCodeIsVisible] = useState(isExpanded);
  const [cssIsVisible, setCssIsVisible] = useState(isCssExpanded);
  const theme = React.useContext(ThemeContext);
  const cssButtonVisible = exampleCssSrc !== undefined;

  const handleCssToggle = () => {
    setCssIsVisible(!cssIsVisible);
    if (codeIsVisible) {
      setCodeIsVisible(!codeIsVisible);
    }
  };

  const handleCodeToggle = () => {
    setCodeIsVisible(!codeIsVisible);

    if (cssIsVisible) {
      setCssIsVisible(!cssIsVisible);
    }
  };

  const handleKeyDown = (event, handleToggle) => {
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      handleToggle();
    }
  };

  const renderExamples = () => (
    <div>
      { cssIsVisible
        && (
          <div className={cx('css')}>
            {exampleCssSrc}
          </div>
        )}
      { codeIsVisible
        && (
          <div className={cx('code')}>
            {exampleSrc}
          </div>
        )}
    </div>
  );

  const renderButtons = () => (
    <div>
      {exampleSrc
      && (
      <div className={cx('footer')}>
        <div className={cx('button-container')}>
          {cssButtonVisible && (
            <button
              type="button"
              className={cx('css-toggle', 'item', { 'is-selected': cssIsVisible })}
              onClick={handleCssToggle}
              onKeyDown={event => handleKeyDown(event, handleCssToggle)}
              onBlur={enableFocusStyles}
              onMouseDown={disableFocusStyles}
              tabIndex={0}
              data-focus-styles-enabled
            >
              CSS
            </button>
          )}
          <button
            type="button"
            className={cx('code-toggle', 'item', { 'is-selected': codeIsVisible })}
            onClick={handleCodeToggle}
            onKeyDown={event => handleKeyDown(event, handleCodeToggle)}
            onBlur={enableFocusStyles}
            onMouseDown={disableFocusStyles}
            tabIndex={0}
            data-focus-styles-enabled
          >
            <IconChevronLeft className={cx('chevron')} />
            <span>Code</span>
            <IconChevronRight className={cx('chevron')} />
          </button>
        </div>
        {renderExamples()}
      </div>
      )}
    </div>
  );

  return (
    <div
      className={cx('template', theme.className)}
    >
      <div className={cx('header')}>
        {title && (
          <h2 className={cx('title')}>
            {title}
          </h2>
        )}
      </div>
      <div className={cx('content')}>
        {description && (
          <div className={cx('description')}>
            {description}
          </div>
        )}
        {example}
      </div>
      {renderButtons()}
    </div>
  );
};

ExampleTemplate.propTypes = propTypes;
ExampleTemplate.defaultProps = defaultProps;

export default ExampleTemplate;
