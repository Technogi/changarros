import React from 'react'
import { Router } from '@reach/router'
import BusinessesCrudPage from '../components/business'
import HomePage from '../components/home'

const MainRoutes = () => (
  <Router>
    <HomePage path="/" default />
    <BusinessesCrudPage path="/businesses/" />
  </Router>
)

export default MainRoutes
