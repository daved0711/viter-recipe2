import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './components/store/storeContext'
import Recipe from './components/pages/backend/Recipe/Recipe'
import HomePage from './components/pages/frontend/homepage/HomePage'
import Single from './components/pages/frontend/single/Single'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Category from './components/pages/backend/Category/Category'
import Level from './components/pages/backend/Level/Level'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/recipe/single/:slug' element={<Single/>}/>
          <Route path='/admin/food' element={<Recipe/>}/>
          <Route path='/admin/category' element={<Category/>}/>
          <Route path='/admin/level' element={<Level/>}/>
        </Routes>
      </Router>
    </StoreProvider>
    </QueryClientProvider>
  )
}

export default App