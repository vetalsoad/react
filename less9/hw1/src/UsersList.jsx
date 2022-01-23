import React, { Component } from "react";
import User from './User';
import Filter from './Filter';

class UsersList extends Component {

  state = {
    value: '',
  };

  changeHandler = event => {
    this.setState({
      value: event.target.value,
    })
  }
  
  filterUsers(){
    return this.props.users
      .slice()
      .filter(user => user.name.toUpperCase().includes(this.state.value.toUpperCase()));
  }

  render(){
    return (
      <div>
        <Filter onChange={this.changeHandler} />
        <ul className='users'>
          {this.filterUsers().map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
};

export default UsersList;