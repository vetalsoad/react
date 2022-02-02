import React, { Component } from "react";
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    showContent: false,
  };

  onTogglerContent = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  };

  render() {
    const content = this.state.showContent 
      ? (<div className='expand__content'>
        {this.props.children}
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a className.
          </p>
        </div>)
      : null;

      const icon = this.state.showContent 
        ? <i className='fas fa-chevron-up'></i>
        : <i className='fas fa-chevron-down'></i>
    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{this.props.title}</span>
          <button className='expand__toggle-btn' onClick={this.onTogglerContent}>
            {icon}
          </button>
        </div>
        {content}
      </div>
    );
  }
}
Expand.PropTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  title: "",
};

export default Expand;
