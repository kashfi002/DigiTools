
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rating from './Components/Rating/Rating'
import Tabs from './Components/Tabs/Tabs'

const getModels=async()=>{
  const res=await fetch("/Data.json");
  return res.json()
}
const modelPromise=getModels();
function App() {
 
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense><Tabs modelPromise={modelPromise}></Tabs></Suspense>
    </>
  )
}

export default App
