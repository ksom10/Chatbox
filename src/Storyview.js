import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./Storyview.css";
import faker from "@faker-js/faker";
import Users from './Users';
import { useHistory } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import tmz from './images/tmz.png';
import barstool from './images/barstool.jpg'


function Storyview() {

    const history = useHistory();


    const [suggestions, setSuggestions] = useState([]);

    


    useEffect(() => {
       const suggestions = [...Array(3)].map((_, i) => ({
           ...faker.helpers.contextualCard(),
           id: i,
       }));

       setSuggestions(suggestions);
    }, [])

    function viewStory() {
        history.push('/story');
    }
    function home() {
        history.push('/');
    }

    function viewSubOne() {
        history.push('/subone');
    }

    function viewSubTwo() {
        history.push('/subtwo');
    }
    


  return (
    <div className='storyview' >
        <div className='storyview_header'>
            <Home
            onClick={home}
            className='storyview_home'
            fontSize="large" />
        <h1>Stories</h1>
        </div>
        
        <div className='storyview_users' onClick={viewStory}>
        {suggestions.map((profile) => (
            <Users  key={profile.id} img={profile.avatar}   />
        ))}
        </div>
        <h3>Subscriptions</h3>
        <div className='storyview_subscription'>
            <img src={tmz} className="storyview_sub" onClick={viewSubOne} />
            <img src={barstool} className="storyview_sub" onClick={viewSubTwo} />

        </div>
    </div>
  )
}

export default Storyview;