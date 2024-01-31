import "./App.css";
import Mainpage from "./pages/Mainpage";
import { MyContext, ThemeContext } from "./Context/MyContext";
import { useState } from "react";

function App() {
  const [usernam, setUsernam] = useState("brahimisgreat");
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <MyContext.Provider value={{ usernam, setUsernam }}>
        <div className="bob" id={theme}>
          <Mainpage />
        </div>
      </MyContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
