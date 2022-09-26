import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import Todos from "./components/Todos/Todos";
import Comments from "./components/Comments/Comments";
import Albums from "./components/Albums/Albums";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {

  return (
      <div>
        <ul>
          <li><NavLink to={'/'}>HomePage</NavLink></li>
          <li><NavLink to={'/todos'}>Todos</NavLink></li>
          <li><NavLink to={'/albums'}>Albums</NavLink></li>
          <li><NavLink to={'/comments'}>Comments</NavLink></li>
        </ul>
        <hr/>

        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path={'todos'} element={<Todos/>}/>
          <Route path={'albums'} element={<Albums/>}/>
          <Route path={'comments'} element={<Comments/>}/>
            <Route path={'posts/:id'} element={<PostDetails/>}/>
        </Routes>
      </div>
  );
}

export default App;

// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.