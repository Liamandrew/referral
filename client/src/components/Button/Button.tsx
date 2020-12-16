import React from "react";
import style from "./Button.module.css";

interface ButtonProps {
    variant: "primary" | "secondary";
    type?: "button" | "submit";
    label: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    label,
    onClick,
    type = "button",
}) => (
    <button type={type} className={style[`${variant}Button`]} onClick={onClick}>
        {label}
    </button>
);

export { Button };
