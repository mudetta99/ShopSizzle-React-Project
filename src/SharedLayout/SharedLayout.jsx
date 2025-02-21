import React from 'react'
import Foooter from '../components/admin/Foooter'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/user/UserHeader'

export default function SharedLayout() {
  return (
    <>

        <UserHeader />
        <Outlet  />
        <Foooter />
    </>
  )
}
