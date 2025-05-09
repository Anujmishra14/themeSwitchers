import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import Themebutton from './components/Themebutton'
import Card from './components/Card'



function App() {
  const [themeMode,setThemeMode]=useState("light")
 


  const darkTheme=()=>{
    setThemeMode("dark")
  }
  const lightTheme=()=>{
    setThemeMode("light")
  }

  // actual change in theme
   useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
   },[themeMode])


//here we have given a dependecy of themeMode so that if we get any change in themeMode it will render it again and updated

  return (
   
    <>

     <h1 className='p-4 absolute inset-x-0 top-0 h-16  bg-pink-300 text-3xl font-bold'>Product to Sell</h1>
       <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <Themebutton />
          </div>

          <div className="w-full max-w-sm mx-auto">
           <Card />
          </div>
        </div>
      </div>
      </ThemeProvider>

    </>
  )
}

export default App
