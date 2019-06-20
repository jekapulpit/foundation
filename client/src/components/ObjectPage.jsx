import React from "react"
import store from '../store'
import {connect} from "react-redux";

class ObjectPage extends React.Component {
    constructor(props) {
        super(props);
        fetch(`http://localhost:3001/api/v4/scp_objects/${this.props.match.params.id}`, {
            mode: 'cors'
        })
            .then((response) => { return response.json() })
            .then((data) => {
                store.dispatch({ type: 'SET_OBJECT', currentObject: data.object })
            })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={"container"}>
                <div className="object-list">
                    {store.getState().object.currentObject.name}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    object: state.object,
    user: state.user
});

export default connect(mapStateToProps)(ObjectPage)
