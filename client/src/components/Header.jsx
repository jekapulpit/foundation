import React from "react"
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import '../stylesheets/components/MainPage.scss'

const Header = props => {
    return (
        <div className={"header"}>
            {props.currentUser ? (<div>{props.currentUser.email}</div>) : (<div>log in</div>)}
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header)
