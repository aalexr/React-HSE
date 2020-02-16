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

const Clock = ({ date }) => <div>{date.toLocaleTimeString()}</div>;

class ClassComponent extends React.Component {
  state = {
    counter: 0,
    time: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  handleGreetingClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    const extendedName = this.props.name + " the developer";

    return (
      <div className="app">
        <FunctionalComponent
          name={extendedName}
          onClick={this.handleGreetingClick}
        />
        <div>Counter: {this.state.counter}</div>
        <Clock date={this.state.time} />
      </div>
    );
  }
}

const App = () => {
  return <ClassComponent name="Valera" />;
};

export default App;
