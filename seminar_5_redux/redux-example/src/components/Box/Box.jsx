import React from "react";
import classnames from "classnames/bind";

import styles from "./Box.module.scss";
import Node from "../Node/Node";

const cx = classnames.bind(styles);

const Box = ({ children }) => {
  return <div className={cx("container")}>{children}</div>;
};

export const Box2 = () => (
  <Box>
    <Node />
    <Node />
  </Box>
);

export const Box1 = () => (
  <Box>
    <Node />
    <Node />
    <Box2 />
  </Box>
);

export const Box3 = () => (
  <Box>
    <Node />
    <Box>
      <Node />
      <Node />
    </Box>
    <Box>
      <Node />
      <Node />
    </Box>
  </Box>
);
