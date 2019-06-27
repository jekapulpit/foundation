import React from "react"
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import ActiveUser from "./users/ActiveUser";
import '../stylesheets/components/Header.scss'
import {LOG_OUT} from "../actionTypes";

const Header = props => {
    return (
        <div className={"header"}>
            {props.currentUser ? (<ActiveUser user={props.currentUser}/>) : (<div className="user-info">log in</div>)}
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header)
