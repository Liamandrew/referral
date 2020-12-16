import React from "react";
import style from "./SubHeading.module.css";

const SubHeading: React.FC = ({ children }) => (
    <div className={style.underline}>
        <h4 className={style.subHeading}>{children}</h4>
    </div>
);

export { SubHeading };
