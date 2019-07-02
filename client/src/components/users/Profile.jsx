import React from "react"
import {getCurrentUser, setUserSession} from "../../services/localStorageServices";
import {getTokenFromCookie} from "../../services/cookieServices";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProfile: {
                info: {}
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
        return (
            <div>
                {this.state.currentProfile.info.email}
            </div>
        );
    }
}

export default Profile
