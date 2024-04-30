import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePages from '../Pages/HomePages/HomePages';

const AppRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={<HomePages/>}/>
    </Routes>

  )
}

export default AppRouter