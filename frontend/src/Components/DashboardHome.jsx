import React from 'react'
import '../assets/style.css';
import TheHeader from './index/TheHeader';
import TheHome from './index/TheHome';
import TheServices from './index/TheServices';
import TheNews from './index/TheNews';
import TheTeam from './index/TheTeam';
import TheFooter from './index/TheFooter';

const DashboardHome = () => {
  return (
    <div>
      <TheHeader />
      <main className="main">
        <TheHome />
        <TheServices />
        <TheNews />
        <TheTeam />
      </main>
      <TheFooter />
    </div>
  )
}

export default DashboardHome


