import './App.css';
import {useState} from "react";

import Users from "./components/Users/Users";
import {Posts} from "./components";
import {postService} from "./services";


function App() {

    const [posts, setPosts] = useState([]);

    const getPosts=(userId)=>{
        postService.getAll(userId).then(value => setPosts(value.data))}

  return (<div>
          <Posts posts={posts}/>
          <Users getPosts={getPosts}/>
        </div>
  );
}

export default App;
