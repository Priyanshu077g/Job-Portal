import { useEffect, useState } from "react"


const DarkMode = () => {
    const [theme, setTheme] = useState("light-theme")
    const toggleTheme = () => {
        if(theme === "dark-theme") {
            setTheme("light-theme")
        }else {
            setTheme("dark-theme")
        }
    };
    useEffect(() =>{
        document.body.className = theme;
    },[theme])
  return (
    <div>
        <button onClick={toggleTheme}>Tip</button>
    </div>
  )
}

export default DarkMode