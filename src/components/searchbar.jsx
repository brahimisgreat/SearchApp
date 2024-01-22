import icon from "../assets/icon-search.svg"
import classes from './searchbar.module.css'
import PropTypes from 'prop-types'

export default function Searchbar({setUsername, username}) {

function handleClick() {
 setUsername(username)
 console.log(username) 
}

  return (
    <div className={classes.container}>
        <img src={icon} />
        <input type="text" placeholder="Search GitHub username…"  value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <button onClick={handleClick} >Search</button>
    </div>
  )

  }
Searchbar.propTypes = {
 setUsername: PropTypes.func,
 username:PropTypes.string,
}