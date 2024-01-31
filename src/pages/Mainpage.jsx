import Body from '../components/Body'
import Header from '../components/Header'
import Searchbar from '../components/searchbar'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { MyContext, ThemeContext } from '../Context/MyContext'
import   './main.css'

export default function Mainpage() {

  const {usernam}= useContext(MyContext)
  const {theme} = useContext(ThemeContext)

  const [user, setUser] = useState([])
  const [username, setUsername] =useState('octacat')
  
  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(`https://api.github.com/users/${usernam}`)
        const result = await response.json();
        setUser(result)
        console.log(result)
        console.log(user)
      }  catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[usernam])
  
  return (
    <div className={theme + "-mainContainer"}>
      <Header />
      <Searchbar setUsername={setUsername} username={username}/>
      <Body  data={user}/>
    </div>
  )
}
