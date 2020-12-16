import React from "react";
import style from "./Heading.module.css";

const Heading: React.FC = ({ children }) => (
    <h1 className={style.heading}>{children}</h1>
);

export { Heading };
