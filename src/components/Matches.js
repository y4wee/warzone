import React, { useEffect, useState } from "react";

const Matches = (props) => {
    const changeName = (target) => {
        switch (target) {
            case "br_rebirth_rbrthtrios":
                return "Rebirth Trio";
                break;
            case "br_rebirth_rbrthquad":
                return "Rebirth Squad";
                break;
            case "br_rebirth_playlist_wz340/fortkeep_res_quad":
                return "Fortkeep Squad";
                break;
            default:
                return target;
                break;
        }
    };
    return (
        <div className="matches">
            {props.data.map((matche, index) => (
                <div className="matchesCard" key={index}>
                    <div className="matchesMode">
                        {changeName(matche[1].mode)}
                    </div>
                    <div className="matchesPlacement">
                        {"Top " + matche[1].playerStats.teamPlacement}
                    </div>
                    <div className="matchesKill">
                        {"Kills : " + matche[1].playerStats.kills}
                    </div>
                    <div className="matchesDeath">
                        {"Deaths : " + matche[1].playerStats.deaths}
                    </div>
                    <div className="matchesRatio">
                        {"Ratio : " + matche[1].playerStats.kdRatio.toFixed(2)}
                    </div>
                    <div className="matchesScore">
                        {"Score : " + matche[1].playerStats.score}
                    </div>
                    <div className="matchesDmgDone">
                        {"Damages done : " + matche[1].playerStats.damageDone}
                    </div>
                    <div className="matchesDmgTaken">
                        {"Damages taken : " + matche[1].playerStats.damageTaken}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Matches;
