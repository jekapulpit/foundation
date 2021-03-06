import React from "react"
import {logout} from "../../services/authentificationService";

const ActiveUser = props => {
    return (
           <div className="user-info" >
               {props.user.email}
               <button onClick={() => logout()}>log out</button>
           </div>
    );
};

export default ActiveUser
