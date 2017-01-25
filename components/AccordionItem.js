import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Icon from './Icon';
import '@console/bluemix-components/consumables/scss/components/accordion/accordion.scss';

class AccordionItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    open: PropTypes.bool,
    onClick: PropTypes.func,
  }
  static defaultProps = {
    onClick: () => {},
  }
  state = {
    open: this.props.open,
  }
  handleClick = (evt) => {
    const open = !this.state.open;
    this.setState({ open });
    this.props.onClick({ isOpen: open, event: evt });
  }
  handleKeyPress = (evt) => {
    if (evt.which === 13 || evt.which === 32) {
      this.handleClick(evt);
    }
  }
  render() {
    const {
      className,
      title,
      children,
      onClick, // eslint-disable-line no-unused-vars
      ...other,
    } = this.props;

    const classNames = classnames({
      'bx--accordion__item--active': this.state.open,
    },
    'bx--accordion__item',
    className,
    );
    return (
      <li className={classNames} onClick={this.handleClick} onKeyPress={this.handleKeyPress} {...other} tabIndex="0">
        <div className="bx--accordion__heading">
          <Icon className="bx--accordion__arrow" name="chevron--right" description="Expand/Collapse" />
          <p className="bx--accordion__title">{title}</p>
        </div>
        <div className="bx--accordion__content">{children}</div>
      </li>
    );
  }
}

export default AccordionItem;