import React from "react"
import {connect} from "react-redux";
import { SET_OBJECT, HANDLE_EDIT, HANDLE_UPDATE } from '../actionTypes'

class ObjectPage extends React.Component {
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
            })
    };

    handleEdit = (objectFields) => {
        if(this.props.currentObject.editable){
            this.handleUpdate(this.mapFieldsToValues(objectFields))
        }
        this.props.toggleHandleEdit(this.props.currentObject.editable)
    };

    render() {
        this.objectFields = {};
        let objectView = !this.props.currentObject.editable ?
            (<div className="object-list">
                <p>{`SCP-${this.props.currentObject.number} - ${this.props.currentObject.name}`}</p>
                <p>{this.props.currentObject.containment_procedures}</p>
                <p>{this.props.currentObject.description}</p>
            </div>)
            :
            (<form className="object-list">
                SCP-<input ref={input => this.objectFields.number = input} type="text" defaultValue={this.props.currentObject.number} />
                <input ref={input => this.objectFields.name = input} type="text" defaultValue={this.props.currentObject.name} />
                <textarea ref={input => this.objectFields.containment_procedures = input} defaultValue={this.props.currentObject.containment_procedures} />
                <textarea ref={input => this.objectFields.description = input} defaultValue={this.props.currentObject.description} />
            </form>);
        return (
            <div className={"container"}>
                {objectView}
                <button onClick={() => this.handleEdit(this.objectFields)}>edit</button>
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
