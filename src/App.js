import {Route, BrowserRouter as Router, Routes,Navigate} from "react-router-dom";


import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/card.scss"
import "./styles/postList.scss"
import "./styles/postDetails.scss"
import "./styles/login.scss"

import Header from "./components/Layout/Header";
import Posts from "./components/home/Posts";
import PostDetail from "./components/home/PostDetail";
import Login from "./components/home/Login";

function App() {
  let isAuthenticated=true;
  
 
  return (
      <div className="App">
    <Router>
        <Header isAuthenticated={true}/>
         <Routes>
            <Route path="/" element={<Posts/>}></Route>
            <Route path="/:id"  element={<PostDetail/>}></Route>
            <Route path="/login"  element={<Login/>}></Route>
            <Route path="*"  element={<Login/>}></Route>
            
         </Routes>
      </Router>
    </div>
  );
}

export default App;
