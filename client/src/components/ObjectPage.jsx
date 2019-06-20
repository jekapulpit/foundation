import React from "react"
import store from '../store'
import {connect} from "react-redux";

class ObjectPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v4/scp_objects/${this.props.match.params.id}`, {
            mode: 'cors'
        })
            .then((response) => { return response.json() })
            .then((data) => {
                store.dispatch({ type: 'SET_OBJECT', currentObject: data.object })
            })
    }

    render() {
        return (
            <div className={"container"}>
                <div className="object-list">
                    <p>{this.props.currentObject.name}</p>
                    <p>{this.props.currentUser.name}</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentObject: state.object.currentObject,
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(ObjectPage)
