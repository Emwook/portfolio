import React from "react";
import { Button } from "react-bootstrap";
import styles from './ButtonComponent.module.scss';
import clsx from "clsx";

interface ButtonProps {
    children: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children }) => {

    return(
        <Button className={clsx(`mt-2 w-50 bg-light text-dark border-success`, styles.button)}>{children}</Button>
    );
};

export default ButtonComponent;