import React from 'react';
import './usernamePage.css';
import spotifyLogo from './spotifyLogo.png';

export default function EnterUsernamesPage() {
  return (
    <>
        
        <div>
        <br/>
        <img id='logo' src={spotifyLogo} className = 'spotifyLogo' alt = "spotify logo" />
        <p id = 'title'>TunesConnect</p>
        </div>
        <div>
        <p>Create a common playlist between you and your friend!</p>
        <p id = 'instructions' >Enter each person's Spotify Username:</p>
        <label for = 'f1'>Friend 1</label>
        <input id = 'f1' type = 'text' />
        <br/>
        <label for = 'f2'>Friend 2</label>
        <input id = 'f2' type = 'text' />
        </div>
    </>
  )
}
