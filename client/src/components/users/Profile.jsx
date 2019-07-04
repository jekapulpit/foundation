import React from "react"
import {getCurrentUser, setUserSession} from "../../services/localStorageServices";
import {getTokenFromCookie} from "../../services/cookieServices";
import { Link } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProfile: {
                info: {},
                drafts: []
            }
        }
    }

    componentDidMount() {
        let url = ('http://localhost:3001/api/v4/users/' + this.props.match.params.id);
        let requestOpts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getTokenFromCookie()
            },
        };
        fetch(url, requestOpts)
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({
                    currentProfile: data.user
                });
            });
    }

    render() {
        let drafts = this.state.currentProfile.drafts.map((draft) => {
            return (<Link to={"/drafts/" + draft.id} >
                {draft.title}
            </Link>)
        });
        return (
            <div>
                {this.state.currentProfile.info.email}
                <p>your drafts: </p>
                {drafts}
            </div>
        );
    }
}

export default Profile
