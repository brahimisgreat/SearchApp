import    './Header.css'
import moon from '../assets/icon-moon.svg'
import { ThemeContext } from '../Context/MyContext'
import { useContext } from 'react'
import sun from '../assets/icon-sun.svg'
export default function Header() {
  const {theme} = useContext(ThemeContext)
  const {toggleTheme} = useContext(ThemeContext)




  return (
    <div className={theme + 1} >
        <h3>devfinder</h3>
        <div className='kidtainer'>
            <button onClick={toggleTheme} >{theme === "dark" ? 'Light' : "Dark" }</button>
            {theme === 'light' ? <img src={moon}/> : <img src={sun}/>}   
        </div>
    </div>
  )
}
