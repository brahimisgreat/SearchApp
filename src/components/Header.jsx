import    './Header.css'
import moon from '../assets/icon-moon.svg'
import { ThemeContext } from '../Context/MyContext'
import { useContext } from 'react'

export default function Header() {
  const {theme} = useContext(ThemeContext)

function Click () {
console.log(theme)
}

  return (
    <div id={theme}>
        <h3>devfinder</h3>
        <div className='kidtainer'>
            <button onClick={Click} >{'Dark'}</button>
            <img src={moon} />     
        </div>
    </div>
  )
}
