import React from "react"
import store from '../store'

const MainPage = props => {
    return (
           <div>
               hello, {store.getState().users.length}
           </div>
    );
};

export default MainPage
