import React from "react";
import style from "./TextField.module.css";

interface TextFieldProps {
    label: string;
    name?: string;
    error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ name, label, error }, ref) => (
        <div>
            <label id={name} className={style.label}>
                {label}
            </label>
            <div className={style.inputContainer}>
                <input
                    ref={ref}
                    className={style.input}
                    name={name}
                    aria-labelledby={name}
                />
            </div>
            {error && <p className={style.error}>{error}</p>}
        </div>
    )
);

export { TextField };
