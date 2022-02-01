import React from "react";
import UsersList from "./UsersList";
import Pagination from "./Pagination";

class App extends React.Component {
  // pageNumber: num
  state = {
    pageNumber: 1,
  };

  users = [
    { id: 1, name: "Bob", age: 21 },
    { id: 2, name: "Sam", age: 45 },
    { id: 3, name: "Con", age: 22 },
    { id: 4, name: "Man", age: 55 },
    { id: 5, name: "Boy", age: 65 },
    { id: 6, name: "Her", age: 31 },
    { id: 7, name: "Wer", age: 35 },
    { id: 8, name: "Per", age: 30 },
    { id: 9, name: "Ser", age: 70 },
  ];

  prevBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  render() {
    const { pageNumber } = this.state;
    const itemsPerPage = 3;

    const startIndex = (pageNumber - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const usersToRender = this.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          prev={this.prevBtnHandler}
          next={this.nextBtnHandler}
          usersCount={this.users.length}
          itemsPerPage={itemsPerPage}
        />
        <UsersList users={usersToRender} />
      </div>
    );
  }
}

export default App;
