import React, { useEffect, useState } from "react";

const Profil = (props) => {
    let dataKey = Object.keys(props.data);
    let data = Object.values(props.data);

    return (
        <div className="profil">
            {data.slice(0, data.length - 1).map((stat, index) => (
                <div className="profilStat" key={index}>
                    <div className="profilStatName">{dataKey[index]}</div>
                    <div className="profilStatValue">{stat.toFixed(2)}</div>
                </div>
            ))}
        </div>
    );
};

export default Profil;
