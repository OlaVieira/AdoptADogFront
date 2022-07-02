import React from "react";
import './DogButton.css';
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
}
export const DogButton = (props: Props) => (
    props.to
        ? <Link className="btn" to={props.to}>{props.text}</Link>
        : <button className="button">{props.text}</button>
);
