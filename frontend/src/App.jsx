import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotfoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <>
      <div>
          <NavBar />
          <div id = "page-body">
            <Routes>
              <Route path ="/" element = {<HomePage /> } />
           <Route path ="/about" element = {<About />} />
           <Route path = "/articles" element = {<ArticlesListPage />} />
           <Route path = "/articles/:articleId" element = {<ArticlePage />} />
           <Route path = "/login" element = {<LoginPage/>} />
           <Route path = "/create-account" element = {<CreateAccountPage />} />
           <Route path = "*" element = {<NotfoundPage />} />
            </Routes>
         
          </div>
       </div>
    </>
 
    </BrowserRouter>
    )
}

export default App


