import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <p>
            {props.parts.map((part) => (
                <Part key={part.name} part={part.name} exercises={part.exercises} />
            ))}
        </p>
    );
};

export default Content;
