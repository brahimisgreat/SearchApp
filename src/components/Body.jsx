import classes from "./Body.module.css";
import cat from "../assets/favicon-32x32.png";
import { useState, useEffect } from "react";
import location from '../assets/icon-location.svg'
import company from '../assets/icon-company.svg'
import twitter from '../assets/icon-twitter.svg'
import website from '../assets/icon-website.svg'

export default function Body() {
 
const [user, setUser] = useState('')

// gets users date of account creation
 const eta = user.created_at
 const date = new Date(eta);
 const newdate = date.toDateString()
 
 


 const username= 'octacat' 

useEffect(() => {
  async function fetchData () {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const result = await response.json();
      setUser(result)
      console.log(user)
    }  catch (error) {
      console.log(error)
    }
  }
  fetchData()
},[])


  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <img src={user.avatar_url} />
        <div className={classes.userinfo}>
          <h1>{user.login}</h1>
          <a><h3>@{user.login}</h3></a>
          <p>
            joined {newdate}
          </p>
        </div>
      </div>
      <p className={classes.para}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className={classes.stats}>
        <div className={classes.sta}>
          <h5>Repos</h5>
          <span>{user.public_repos }</span>
        </div>
        <div className={classes.sta}>
          <h5>Followers</h5>
          <span>{user.followers}</span>
        </div>
        <div className={classes.sta}>
          <h5>Following</h5>
          <span>{user.following}</span>
        </div>
      </div>
      <div className={classes.sociallinks}>
        <div className={classes.sl}>
          <img src={location}/>
          <span> {user.location? user.location : "not available"}</span>
        </div>
        <div className={classes.sl}>
          <img src={website}/>
          <span> {user.html_url ? user.html_url : 'not available'}</span>
        </div>
        <div className={classes.sl}>
          <img src={twitter}/>
          <span>{user.twitter_username ? user.twiitter_username : "not available"}</span>
        </div>
        <div className={classes.sl}>
          <img src={company}/>
          <span className={classes.twit}>@{user.company ? user.company :'not available'}</span>
        </div>
      </div>
    </div>
  );
}
