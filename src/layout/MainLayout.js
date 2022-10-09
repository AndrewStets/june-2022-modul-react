import {Users, Posts, Header} from "../components";

function MainLayout() {

  return (
      <div>
          <Header/>
          <hr/>
          <hr/>
          <hr/>
          <div>
              {/*<Users/>*/}
              <hr/>
              <hr/>
              <Posts/>
          </div>
      </div>
        );
}

export {MainLayout};