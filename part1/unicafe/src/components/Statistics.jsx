import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="Good" value={props.good} />
                    <StatisticLine text="Neutral" value={props.neutral} />
                    <StatisticLine text="Bad" value={props.bad} />
                    <StatisticLine text="Total" value={props.total} />
                    <StatisticLine text="Average" value={props.average} />
                    <StatisticLine text="Positive" value={props.positive} />
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;