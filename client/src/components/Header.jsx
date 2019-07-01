import React from "react"
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import ActiveUser from "./users/ActiveUser";
import '../stylesheets/components/Header.scss'

const Header = props => {
    return (
        <div className={"header"}>
            <Link className='main-logo' to={"/"} >
                Article list
            </Link>
            {props.currentUser ? (<ActiveUser user={props.currentUser}/>) : (<div className="user-info">log in</div>)}
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header)
