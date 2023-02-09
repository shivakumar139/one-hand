import React from 'react'
import { HeroSection } from '../components/HeroSection'
import Mission from '../components/Mission'
import WhatDoing from '../components/WhatDoing'
import Tips from '../components/Tips'

export const Home = () => {
  return (
    <>
        <HeroSection/>
        <Mission/>
        <WhatDoing/>
        <Tips/>
    </>
  )
}
