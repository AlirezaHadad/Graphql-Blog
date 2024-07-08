import { Route, Routes } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import Header from "./components/Layout/Header"
import Layout from "./components/Layout/Layout"
import BlogPage from "./components/Blog/BlogPage"
import AuthorPage from "./components/Author/AuthorPage"

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/blogs/:slug" element={<BlogPage />}/>
        <Route path="/author/:slug" element={<AuthorPage />}/>
      </Routes>  
    </Layout>
    </>
  )
}

export default App
