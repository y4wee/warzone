import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const [gamertag, setGamertag] = useState("");
    const [platform, setPlatform] = useState("battle");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        let logged = JSON.parse(window.localStorage.getItem('loggedWZ'));
        if(logged === true) {
            setLoggedIn(logged)
        }
    }, []);

    // gestion events button et input
    // event entré de l'input gamertag
    const inputChange = (e) => {
        e.preventDefault();
        let value = e.target.value
        if(value.includes("#")) {
            setGamertag(value.split("#").join("%2523"));
        } else {
            setGamertag(value)
        }
        console.log(gamertag);
    }
    // event selection platform
    const selectChange = (e) => {
        e.preventDefault();
        setPlatform(e.target.value)
    }
    // event requete axios avec button
    const searchButton = (e) => {
        e.preventDefault();

        let options = {
            method: 'GET',
            url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`,
            headers: {
                'X-RapidAPI-Key': 'a4be8a83c7mshecc376eb341d10ep182ae1jsnb6ba96a80581',
                'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
            }
        };

        axios.request(options)
        .then((res) => {
          if(res.status === 200) {
            setLoggedIn(true)
            localStorage.setItem("loggedWZ", JSON.stringify(true))
          }
        }).catch((err) => {
          console.error(err);
        });

    }

    if(!loggedIn) {
        return (
            <div className='page home'>
                <Header />
    
                <div className="homeSearch">
                    <div className="homeSearchEntries">
                        <input className="homeSearchInput" type="text" name="gamertag" required minLength="2" onBlur={inputChange}></input>
                        <select name="platform" id="platform-select" onChange={selectChange}>
                            <option value="battle">BattleNET</option>
                            <option value="steam">Steam</option>
                            <option value="acti">ActivisionID</option>
                            <option value="psn">PSN</option>
                            <option value="xbl">XBOX</option>
                        </select>
                    </div>
    
                    <div className="homeSearchButton" onClick={searchButton}>Search</div>
                </div>
    
    
                <Footer />
            </div>
        );
    } else {
        return (
            <div className='page home'>
                <Header />
                <Navigation />
    
                welcome to your profil !!
    
                <Footer />
            </div>
        );
    }
};

export default Home;