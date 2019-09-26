import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MarkdownTags.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The html tag for this component. Assumed to be an H tag.
   */
  Tag: PropTypes.string,
  /**
   * Props to apply to this component tag
   */
  props: PropTypes.shape({
    className: PropTypes.string.isRequired,
    children: PropTypes.node,
    id: PropTypes.string,
  }),
};

/**
 * A component to represent an H tag for MDX.
 * @param {{ Tag, props: componentProps }} props
 */
const H = ({ Tag, props: componentProps }) => (
  <Tag {...componentProps} className={[cx(Tag), componentProps.className].join(' ')}>
    <a aria-hidden="true" href={`#${componentProps.id}`} tabIndex="-1" className={cx('a', 'anchor')}>
      <span className={cx('icon', 'icon-link')} />
    </a>
    { componentProps.children }
  </Tag>
);

H.propTypes = propTypes;

export default H;
