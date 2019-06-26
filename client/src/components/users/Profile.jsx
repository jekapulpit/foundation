import React from "react"
import { getCurrentUser } from "../../services/localStorageServices";

const Profile = props => {
    return (
           <div>
               hello, {getCurrentUser().email}
           </div>
    );
};

export default Profile
