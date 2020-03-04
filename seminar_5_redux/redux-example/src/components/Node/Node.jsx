import React from "react";
import classnames from "classnames/bind";
import { uniqueId } from "lodash";
import { connect } from "react-redux";

import styles from "./Node.module.scss";
import { notifyReceiver, stopNotify } from "../../actions";

const cx = classnames.bind(styles);

const mapStateToProps = state => ({
  receiverId: state.receiverId,
  isNotified: state.notify,
  senderId: state.senderId
});

const mapDispatchToProps = dispatch => ({
  notify: currentId => dispatch(notifyReceiver(currentId)),
  stopNotify: () => dispatch(stopNotify)
});

const Node = ({ receiverId, isNotified, senderId, notify, stopNotify }) => {
  const id = React.useRef(uniqueId()).current;

  const isShine = id === receiverId && isNotified;

  return (
    <div
      className={cx("container", { "container-shine": isShine })}
      onClick={() => notify(id)}
      onAnimationEnd={() => stopNotify()}
    >
      <span>{id}</span>
      {isShine && <span>from: {senderId}</span>}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Node);
