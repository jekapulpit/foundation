import React from "react"
import store from '../store'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v4/scp_objects/')
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data);
                store.dispatch({ type: 'SET_OBJECT_LIST', objectList: data.objects })
            }).then(() => {console.log(store.getState())})
    }

    render() {
        return (
            <div>
            hello,
            </div>
        )
    }
}

export default MainPage
