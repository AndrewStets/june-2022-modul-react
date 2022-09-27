import {Comments} from "../components";
import {Outlet} from "react-router-dom";

const CommentPages = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export {CommentPages};