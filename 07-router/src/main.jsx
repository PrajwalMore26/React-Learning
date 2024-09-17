import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Route,createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import User from './components/User/User'
import Github, {githubInfoLoader} from './components/Github/Github'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='About' element={<About/>}/>
        <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
        </Route>
        <Route
        loader={githubInfoLoader} 
         path='github' 
         element={<Github/>}/>
        <Route path='Contact/' element={<Contact/>}/>
        <Route path='*' element={<>NOT FOUND</>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)


