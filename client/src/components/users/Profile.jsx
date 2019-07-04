import React from "react"
import {getTokenFromCookie} from "../../services/cookieServices";
import Draft from '../article/Draft';
import { Link } from "react-router-dom";
import {getCurrentUser} from "../../services/localStorageServices";

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
        let userId = this.props.match.params.id ? this.props.match.params.id : getCurrentUser().id;
        let url = ('http://localhost:3001/api/v4/users/' + userId);
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
            return (<Draft key={draft.name} draft={draft} userId={this.state.currentProfile.info.id} />)
        });
        return (
            <div>
                {this.state.currentProfile.info.email}
                <p>your drafts: <Link to={"/create_new_draft"} >+</Link> </p>
                {drafts}
            </div>
        );
    }
}

export default Profile
