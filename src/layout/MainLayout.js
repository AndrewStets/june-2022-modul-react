import {Users, Posts, Header} from "../components";

function MainLayout() {

  return (
      <div>

          <div>
              <Header/>
              <hr/>
              <hr/>
              <hr/>
          </div>

          <div>
              <Users/>
              <hr/>
              <hr/>
              <Posts/>
          </div>

      </div>
        );
}

export {MainLayout};