import React from "react";
import "./style.css";
// pass down img-name class
export function FormBtn(props) {
    return (
        <div class = {props.class} a = {props.img}></div>
    );
}