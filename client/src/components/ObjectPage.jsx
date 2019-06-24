import React from "react"
import {connect} from "react-redux";
import ObjectFields from "./object/ObjectFields";
import EditObjectForm from "./object/EditObjectForm";
import { SET_OBJECT, HANDLE_EDIT, HANDLE_UPDATE } from '../actionTypes'

class ObjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v4/scp_objects/${this.props.match.params.id}`, {
            mode: 'cors'
        })
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleSetObject(data)
            })
    }

    mapFieldsToValues = (fields) => {
        let newObject = fields;
        for (var key in newObject) {
            newObject[key] = fields[key].value
        }
        return newObject;
    };

    handleUpdate = (newObjectValues) => {
        fetch(`http://localhost:3001/api/v4/scp_objects/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ scp_object: newObjectValues })
        },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleHandleUpdate(data);
                window.location = ('/scp_objects/' + data.object.number)
            })
    };

    handleEdit = (objectFields = {}) => {
        if(this.props.currentObject.editable){
            this.handleUpdate(this.mapFieldsToValues(objectFields))
        }
        this.props.toggleHandleEdit(this.props.currentObject.editable)
    };

    render() {
        let objectView = !this.props.currentObject.editable ?
            (<ObjectFields handleEdit={this.handleEdit} currentObject={this.props.currentObject} />)
            :
            (<EditObjectForm handleEdit={this.handleEdit} currentObject={this.props.currentObject}/>);
        return (
            <div className={"container"}>
                {objectView}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentObject: state.object.currentObject,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleSetObject: (data) => {
            dispatch({ type: SET_OBJECT, currentObject: data.object })
        },
        toggleHandleEdit: (editable) => {
            dispatch({ type: HANDLE_EDIT, editable: editable })
        },
        toggleHandleUpdate: (data) => {
            dispatch({ type: HANDLE_UPDATE, currentObject: data.object })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectPage)
