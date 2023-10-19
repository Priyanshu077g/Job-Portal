
import CreatePost from "./pages/CreatePost"
import EditPosts from "./pages/EditPosts"
import Home from "./pages/Home"
import Login from "./pages/Login"
import PostDetails from "./pages/PostDetails"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import {Route, Routes} from 'react-router-dom'
import { UserContext, UserContextProvider } from "./context/UserContext"
const App = () => {
  return (
    
      <UserContextProvider>
        <Routes>
            <Route exact path = "/" element ={<Home/>}/>
            <Route exact path = "/login" element ={<Login/>}/>
            <Route exact path = "/register" element ={<Register/>}/>
            <Route exact path = "/write" element ={<CreatePost/>}/>
            <Route exact path = "/edit/:id" element ={<EditPosts/>}/>
            <Route exact path = "/profile/:id" element ={<Profile/>}/>
            <Route exact path = "/posts/post/:id" element ={<PostDetails/>}/>

        </Routes>
      </UserContextProvider>
    
  )
}


export default App;