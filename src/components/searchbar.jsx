import icon from "../assets/icon-search.svg"
import classes from './searchbar.module.css'
import PropTypes from 'prop-types'
import { useContext } from "react"
import { MyContext, ThemeContext } from "../Context/MyContext"

export default function Searchbar({username}) {
  const {usernam, setUsernam} = useContext(MyContext)
  const {theme} = useContext(ThemeContext)

function handleClick() { 
 setUsernam(usernam)
 console.log(username) 
}
function onChange(e) {
  e.preventDefault;
  

}

  return (
    <div className={theme}>
        <img src={icon} />
        <input type="text" placeholder="Search GitHub username…"  value={usernam} onChange={onChange} ></input>
        <button onClick={handleClick} >Search</button>
    </div>
  )

  }
Searchbar.propTypes = {
 setUsername: PropTypes.func,
 username:PropTypes.string,
}