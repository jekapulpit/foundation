import React from "react"
import store from '../store'
import {connect} from "react-redux";

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
        let objects = store.getState().object.objectList.map((object) => {
           return (<div key={object.number} >
               {`SCP-${object.number} - ${object.name}`}
           </div>)
        });
        return (
            <div className={"container"}>
                <div className="object-list">
                    {objects}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    object: state.object,
    user: state.user
});

export default connect(mapStateToProps)(MainPage)
