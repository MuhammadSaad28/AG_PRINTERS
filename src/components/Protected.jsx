import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const token = localStorage.getItem('ag-token');
  return (
    token ? <Outlet/> : <Navigate to="/login" />
  )
}

export default Protected
