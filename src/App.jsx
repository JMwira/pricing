import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [subscription, setsubscription] = useState("annually")
  const handleToggle = ()=>{
    if(subscription=="annually"){
      setsubscription("monthly")
    } else{
      setsubscription("annually")
    }
  }

  return (
    <div className=' bg-one bg-contain bg-no-repeat bg-right bg-opacity-20 flex w-full h-full py-10 lg:absolute flex-col justify-center items-center'>
      <div className=' lg:w-[60%] w-[92%] items-center flex flex-col gap-8'>
        <h2 className='text-3xl text-five' >Our Pricing</h2>
        <ul className={subscription=='monthly'?'flex flex-row items-center justify-start text-five gap-3 py-4 ':'flex flex-row items-center justify-end text-five gap-3 py-4 '} >
          <li>Annualy</li>
          <div onClick={handleToggle} className={subscription=="annually"?'p-2 rounded-full w-14 items-center justify-start flex bg-gradient-to-r from-one to-two h-8':'p-2 rounded-full w-14 items-center justify-end flex bg-gradient-to-r from-one to-two h-8'} >
            <div className='rounded-full size-5 bg-white' ></div>
          </div>
          <li>Monthly</li>
        </ul>
        <div className=' w-full flex lg:flex-row lg:gap-0 gap-4 flex-col'>
          <div className=' py-12 text-five gap-3 flex lg:w-1/3 items-center bg-white shadow-lg rounded-lg flex-col p-6'>
            <span>Basic</span>
            <h1 className='mt-7 text-5xl' >{
              subscription=='annually'?<span>$199.99</span>:<span>$19.99</span>
            }</h1>
            <span className='p-3 border-t-[1px] border-b-[1px] pt-5 w-full text-center' >500GB Storage</span>
            <span className='p-3 border-b-[1px] w-full text-center ' >2 Users Allowed</span>
            <span className='p-3 border-b-[1px] text-center w-full ' >Send up to 3GB</span>
            <button className='p-3 rounded-md hover:border-[1px] hover:text-one hover:bg-none bg-gradient-to-r from-one to-two text-white hover:border-gray-400 w-full'>LEARN MORE</button>
          </div>
          <div className=' py-12 text-white gap-3 flex lg:w-1/3 items-center flex-col lg:scale-110 bg-gradient-to-b from-one to-two p-6 rounded-lg ' >
            <span>Professional</span>
            <h1 className='mt-7 text-5xl' >
              {subscription=='annually'?<span>$249.99</span>:<span>$24.99</span>}
            </h1>
            <span className='p-3 border-t-[1px] border-b-[1px] pt-5 w-full text-center' >500GB Storage</span>
            <span className='p-3 border-b-[1px] w-full text-center ' >2 Users Allowed</span>
            <span className='p-3 border-b-[1px] text-center w-full ' >Send up to 3GB</span>
            <button className='p-3 rounded-md hover:border-[1px] text-one hover:text-white w-full bg-white hover:bg-transparent'>LEARN MORE</button>
          </div>
          <div className=' py-12 text-five gap-3 flex lg:w-1/3 items-center bg-white shadow-lg rounded-lg flex-col p-6'>
            <span>Master</span>
            <h1 className='mt-7 text-5xl' >
              {subscription=='annually'?<span>$399.99</span>:<span>$39.99</span>}
            </h1>
            <span className='p-3 border-t-[1px] border-b-[1px] pt-5 w-full text-center' >500GB Storage</span>
            <span className='p-3 border-b-[1px] w-full text-center ' >2 Users Allowed</span>
            <span className='p-3 border-b-[1px] text-center w-full ' >Send up to 3GB</span>
            <button className='p-3 rounded-md hover:border-[1px] hover:text-one hover:bg-none bg-gradient-to-r from-one to-two text-white hover:border-gray-400 w-full'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
