import React from "react"
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { SET_OBJECT_LIST } from "../actionTypes";
import { getCurrentUser } from '../services/localStorageServices'
import { getTokenFromCookie } from '../services/cookieServices'
import '../stylesheets/components/MainPage.scss'

class MainPage extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3001/api/v4/scp_objects/', {
            mode: 'cors',
            headers: {
                'Authorization': getTokenFromCookie()
            }
        })
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleSetObjectList(data)
            })
    }

    render() {
        let objects = this.props.objectList.map((object) => {
           return (<Link to={"/scp_objects/" + object.number} key={object.number} >
               {`SCP-${object.number} - ${object.name}`}
           </Link>)
        });
        return (
            <div className={"container"}>
                <div className="object-list">
                    {objects}
                </div>
                <Link to={"/create_new_object"} >
                    Create new object
                </Link>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    objectList: state.object.objectList,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleSetObjectList: (data) => {
            dispatch({ type: SET_OBJECT_LIST, objectList: data.objects })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
