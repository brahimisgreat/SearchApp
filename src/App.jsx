import './App.css'
import Mainpage from './pages/Mainpage'
import { MyContext } from './Context/MyContext'
import { useState } from 'react'

function App() {
const [usernam, setUsernam] = useState('brahimisgreat')

  return (
    <>
    <MyContext.Provider value={{usernam, setUsernam}}>
       <Mainpage />
    </MyContext.Provider>
    </>
  )
}

export default App
