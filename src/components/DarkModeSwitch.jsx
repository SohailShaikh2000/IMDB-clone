"use client"

import React, { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

const DarkModeSwitch = () => {
  //useTheme
  const {theme, setTheme, systemTheme} = useTheme()

  
  //other Variables
  const currentTheme = theme ==='system' ? systemTheme : theme


  return (
    <div>{ currentTheme ==='dark' ? (
      <MdLightMode  className='text-lx cursor-pointer hover:text:amber-500'
        onClick={()=> setTheme('light')}
      />
    ) : (
      <MdDarkMode className='text-lx cursor-pointer hover:text:amber-500' 
        onClick={()=>setTheme('dark')} 
      />
    )}
  </div>
  )
}

export default DarkModeSwitch
