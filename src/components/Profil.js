import React, { useEffect, useState } from 'react';

const Profil = (props) => {
    let dataKey = Object.keys(props.data);
    let data = Object.values(props.data);
    data = data.slice(0, (data.length - 1))
    console.log(data)
    // useEffect(() => {
    //     dataName = Object.keys(props.data)
    // }, []);

    return (
        <div className='profil'>
            {data.map((stat, index) => (
                <div className="profilStat" key={index}>
                    <div className="profilStatKey">{dataKey[index]}</div>
                    <div className="profilStatNum">{stat}</div>
                </div>
            ))}
        </div>
    );
};

export default Profil;