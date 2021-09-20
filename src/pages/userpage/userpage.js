
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const UserPage = () => {
    const user = useSelector(state => state.auth.user)
    return(
        <NavLink to="">{user}</NavLink>
    );
};

export default UserPage;