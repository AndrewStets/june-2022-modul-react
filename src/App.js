import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {AlbumPages, CommentPages, PostPages, TodoPages} from "./pages";

function App() {

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route path={'albums'} element={<AlbumPages/>}/>
          <Route path={'comments'} element={<CommentPages/>}>
            <Route path={':postId'} element={<PostPages/>}/>
            </Route>
          <Route path={'todos'} element={<TodoPages/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
