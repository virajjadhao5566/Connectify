import React from 'react'
import OptionBar from './components/optionBar'
import MenuBar from './components/menuBar'
import Main from './components/main'

const Dashboard = () => {
  return (
    <div className="dashboard bg-[#1E1F22] h-screen flex flex-row">
        <OptionBar/>
        <MenuBar/>
        <Main/>
    </div>
  )
}

export default Dashboard

