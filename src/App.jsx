
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rating from './Components/Rating/Rating'
import Tabs from './Components/Tabs/Tabs'
import GetStarted from './Components/getStarted/getStarted'

const getModels=async()=>{
  const res=await fetch("/Data.json");
  return res.json()
}
const modelPromise=getModels();
function App() {
   const[cart,setCart]=useState([]);
 
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense><Tabs
      cart={cart} setCart={setCart}
       modelPromise={modelPromise}></Tabs></Suspense>
       <GetStarted></GetStarted>
    </>
  )
}

export default App
