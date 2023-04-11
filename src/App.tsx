import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'

function App(props) {

  useEffect(() => {
    // console.log(">>>>>>>>process kini", process.env.BASE_URL)
  }, [])
 
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login props={props}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
