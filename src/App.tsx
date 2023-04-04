import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'

function App(props) {
 
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
