import React from "react"
import {connect} from "react-redux";
import DraftFields from "./article/DraftFields";
import EditDraftForm from "./article/EditDraftForm";
import { SET_DRAFT, HANDLE_EDIT_DRAFT, HANDLE_UPDATE_DRAFT } from '../actionTypes'
import { getTokenFromCookie } from "../services/cookieServices";
import { getCurrentUser } from "../services/localStorageServices";
import { mapFieldsToValues } from "../services/mapFieldsToValuesService";
import '../stylesheets/components/ArticlePage.scss'

class DraftPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v4/drafts/${this.props.match.params.name}`, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getTokenFromCookie()
            },
        })
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleSetDraft(data)
            })
    }

    handleUpdate = (newDraftValues) => {
        fetch(`http://localhost:3001/api/v4/drafts/${this.props.match.params.name}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getTokenFromCookie()
            },
            body: JSON.stringify({ draft: newDraftValues })
        },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleHandleUpdate(data);
                window.location = ('/profile/' + getCurrentUser().id + '/drafts/' + data.draft.name)
            })
    };

    handleEdit = (DraftFields = {}) => {
        if(this.props.currentDraft.editable){
            this.handleUpdate(mapFieldsToValues(DraftFields))
        }
        this.props.toggleHandleEdit(this.props.currentDraft.editable)
    };

    handleDelete = () => {
        fetch(`http://localhost:3001/api/v4/drafts/${this.props.currentDraft.name}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getTokenFromCookie()
                },
            },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                window.location = ('/profile/')
            })
    };

    render() {
        let DraftView = !this.props.currentDraft.editable ?
            (<DraftFields handleEdit={this.handleEdit} currentDraft={this.props.currentDraft} />)
            :
            (<EditDraftForm handleEdit={this.handleEdit} currentDraft={this.props.currentDraft}/>);
        return (
            <div className={"container"}>
                <div className="Draft-page">
                    {DraftView}
                    <button className="button delete" onClick={() => this.handleDelete()}>delete Draft</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentDraft: state.draft.currentDraft,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleSetDraft: (data) => {
            dispatch({ type: SET_DRAFT, currentDraft: data.draft })
        },
        toggleHandleEdit: (editable) => {
            dispatch({ type: HANDLE_EDIT_DRAFT, editable: editable })
        },
        toggleHandleUpdate: (data) => {
            dispatch({ type: HANDLE_UPDATE_DRAFT, currentDraft: data.draft })
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DraftPage)
