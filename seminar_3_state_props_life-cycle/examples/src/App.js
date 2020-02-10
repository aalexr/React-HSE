import React from "react";

import "./App.css";

const FunctionalComponent = ({ name, onClick }) => {
  const greeting = "Hello, " + name;

  return (
    <button className="content" onClick={onClick}>
      {greeting}
    </button>
  );
};

// const Clock = ({ date }) => <div>{date.toLocaleTimeString()}</div>;

class ClassComponent extends React.Component {
  state = {
    message: ""
  };

  handleGreetingClick = () => {
    this.setState({ message: "Greeting was clicked!" });
  };

  render() {
    const extendedName = this.props.name + " the developer";

    return (
      <div className="app">
        <FunctionalComponent
          name={extendedName}
          onClick={this.handleGreetingClick}
        />
        <div>{this.state.message}</div>
      </div>
    );
  }
}

const App = () => {
  return <ClassComponent name="Valera" />;
};

export default App;
