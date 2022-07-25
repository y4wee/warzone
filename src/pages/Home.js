import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profil from "../components/Profil";

const Home = () => {
    const [gamertag, setGamertag] = useState("");
    const [platform, setPlatform] = useState("battle");
    const [loggedIn, setLoggedIn] = useState(false);
    const [profil, setProfil] = useState([]);

    useEffect(() => {
        let logged = JSON.parse(window.localStorage.getItem("loggedWZ"));
        let dataProfil = JSON.parse(window.localStorage.getItem("dataProfil"));

        if (logged !== null) {
            setLoggedIn(logged);
        }
        if (dataProfil !== null) {
            setProfil(dataProfil);
        }
    }, []);

    // gestion events button et input
    // event entré de l'input gamertag
    const inputChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (value.includes("#")) {
            setGamertag(value.split("#").join("%2523"));
        } else {
            setGamertag(value);
        }
    };
    // event requete axios avec button
    const searchButton = (e) => {
        e.preventDefault();

        let options = {
            method: "GET",
            url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`,
            headers: {
                "X-RapidAPI-Key":
                    "a4be8a83c7mshecc376eb341d10ep182ae1jsnb6ba96a80581",
                "X-RapidAPI-Host": "call-of-duty-modern-warfare.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then((res) => {
                if (res.status === 200) {
                    setLoggedIn(true);
                    setProfil(res.data.br);
                    localStorage.setItem(
                        "dataProfil",
                        JSON.stringify(res.data.br)
                    );
                    localStorage.setItem("loggedWZ", JSON.stringify(true));
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    if (loggedIn) {
        return (
            <div className="page">
                <div className="page">
                    <Header />
                    <Navigation />

                    <Profil data={profil} />

                    <Footer />
                </div>
            </div>
        );
    } else {
        return (
            <div className="page">
                <Header />

                <div className="homeSearch">
                    <div className="homeSearchEntries">
                        <input
                            className="homeSearchInput"
                            type="text"
                            name="gamertag"
                            required
                            minLength="2"
                            onBlur={inputChange}
                            placeholder="Enter your Gamertag"
                        ></input>
                        <select
                            name="platform"
                            className="homeSearchSelect"
                            id="platform-select"
                            onChange={(e) => setPlatform(e.target.value)}
                        >
                            <option value="battle">BattleNET</option>
                            <option value="steam">Steam</option>
                            <option value="acti">ActivisionID</option>
                            <option value="psn">PSN</option>
                            <option value="xbl">XBOX</option>
                        </select>
                    </div>

                    <div className="homeSearchButton" onClick={searchButton}>
                        Loggin
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
};

export default Home;
