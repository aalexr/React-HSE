import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore } from "redux";
import classnames from "classnames/bind";

import styles from "./App.module.scss";
import rootReducer from "../reducers";
import { Box1, Box3 } from "./Box/Box";
import { setReceiverId } from "../actions";

const cx = classnames.bind(styles);

const store = createStore(rootReducer);

const mapDispatchToProps = dispatch => ({
  setReceiverId: newId => dispatch(setReceiverId(newId))
});

const AppContainer = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

const App = ({ setReceiverId }) => {
  return (
    <>
      <div className={cx("input-container")}>
        Receiver ID:
        <input
          className={cx("input")}
          type="number"
          onChange={e => setReceiverId(e.target.value)}
        />
      </div>
      <div className={cx("container")}>
        <Box1 />
        <Box3 />
      </div>
    </>
  );
};

const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default AppContainer;
