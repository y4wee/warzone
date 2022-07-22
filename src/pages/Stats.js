import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Summary from "../components/Summary";
import Matches from "../components/Matches";

const Stats = () => {
    const [matches, setMatches] = useState([]);
    const [summary, setSummary] = useState([]);
    const [summaryOn, setSummaryOn] = useState(true);

    useEffect(() => {
        let matchesData = JSON.parse(
            window.localStorage.getItem("dataMatches")
        );
        let summaryData = JSON.parse(
            window.localStorage.getItem("dataSummary")
        );

        if (matchesData !== null) {
            setMatches(matchesData);
            setSummary(summaryData);
        } else {
            const options = {
                method: "GET",
                url: "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/yawee%252321669/battle",
                headers: {
                    "X-RapidAPI-Key":
                        "a4be8a83c7mshecc376eb341d10ep182ae1jsnb6ba96a80581",
                    "X-RapidAPI-Host":
                        "call-of-duty-modern-warfare.p.rapidapi.com",
                },
            };

            axios
                .request(options)
                .then((res) => {
                    setMatches(Object.entries(res.data.matches));
                    setSummary(Object.entries(res.data.summary.all));
                    localStorage.setItem(
                        "dataMatches",
                        JSON.stringify(Object.entries(res.data.matches))
                    );
                    localStorage.setItem(
                        "dataSummary",
                        JSON.stringify(Object.entries(res.data.summary.all))
                    );
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    let viewBox;
    if (summaryOn) {
        viewBox = <Summary data={summary} />;
    } else {
        viewBox = <Matches data={matches} />;
    }

    return (
        <div className="page">
            <Header />
            <Navigation />
            <ul className="categorie">
                <li
                    className="categorieChosen"
                    onClick={(e) => setSummaryOn(true)}
                >
                    Summary
                </li>
                <li
                    className="categorieChosen"
                    onClick={(e) => setSummaryOn(false)}
                >
                    Matches
                </li>
            </ul>

            {viewBox}

            <Footer />
        </div>
    );
};

export default Stats;
