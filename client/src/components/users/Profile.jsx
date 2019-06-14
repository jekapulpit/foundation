import React from "react"
import store from '../../store'

const Profile = props => {
    return (
           <div>
               hello, {store.getState().currentUser.name}
           </div>
    );
};

export default Profile
