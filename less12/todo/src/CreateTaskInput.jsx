import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateTaskInput extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);
  };

  handleTaskCreate = () => {
    console.log(this.state.value);
    if (!this.state.value) return null;
    this.props.onCreate(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className='create-task'>
        <input
          className='create-task__input'
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className='btn create-task__btn'
          onClick={this.handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
