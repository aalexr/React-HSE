import React from "react";
import classnames from "classnames/bind";

import styles from "./App.module.scss";

const cx = classnames.bind(styles);

const MyInput = ({ theme, placeholder, type }) => (
  <input className={cx("input")} placeholder={placeholder} type={type} />
);

const MyButton = ({ theme, children }) => (
  <button className={cx("button")}>{children}</button>
);

class App extends React.Component {
  state = {
    theme: "light"
  };

  handleThemeChange = event => {
    this.setState({ theme: event.target.value });
  };

  render() {
    return (
      <div className={cx("container")}>
        <div className={cx("radios")}>
          <div>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              checked={this.state.theme === "light"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="light">Light theme</label>
          </div>

          <div>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              checked={this.state.theme === "dark"}
              onChange={this.handleThemeChange}
            />
            <label htmlFor="dark">Dark theme</label>
          </div>
        </div>

        <div className={cx("content")}>
          <MyInput placeholder="Login" theme={this.state.theme} type="text" />
          <MyInput
            placeholder="Password"
            theme={this.state.theme}
            type="password"
          />
          <MyButton>Sign in</MyButton>
        </div>
      </div>
    );
  }
}

export default App;
