import React from "react"
import store from '../store'
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v4/scp_objects/', {
            mode: 'cors'
        })
            .then((response) => { return response.json() })
            .then((data) => {
                store.dispatch({ type: 'SET_OBJECT_LIST', objectList: data.objects })
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
                {this.props.currentUser.name}
                <div className="object-list">
                    {objects}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    objectList: state.object.objectList,
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(MainPage)
