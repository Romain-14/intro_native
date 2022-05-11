import {useSelector, useDispatch} from 'react-redux';

import LogoutRoute from "../navigation/LogoutRoute";
import LoginRoute from "../navigation/LoginRoute";

const RequireAuth = () => {

    const {infos, isLogged} = useSelector((state)=> ({
        ...state.userReducer
    })) 
    
    if(isLogged){
        return <LogoutRoute/> 
    } else {
        return <LoginRoute/>
    }

};

export default RequireAuth;