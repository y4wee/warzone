import React, { useEffect, useState } from "react";

const Summary = (props) => {
    return (
        <div className="summary">
            {props.data.map((stat, index) => (
                <div className="summaryStat" key={index}>
                    <div className="summaryStatName">{stat[0]}</div>
                    <div className="summaryStatValue">{stat[1].toFixed(2)}</div>
                </div>
            ))}
        </div>
    );
};

export default Summary;
