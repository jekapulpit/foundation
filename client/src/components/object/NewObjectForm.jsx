import React from "react"
import Grid from '@material-ui/core/Grid';
import {getTokenFromCookie} from "../../services/cookieServices";

class NewObjectForm extends React.Component {
    mapFieldsToValues = (fields) => {
        let newObject = fields;
        for (var key in newObject) {
            newObject[key] = fields[key].value
        }
        return newObject;
    };

    handleNew = (newObjectValues) => {
        fetch(`http://localhost:3001/api/v4/scp_objects/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getTokenFromCookie()
                },
                body: JSON.stringify({ scp_object: this.mapFieldsToValues(newObjectValues) })
            },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                window.location = ('/scp_objects/')
            })
    };

    render() {
        let objectFields = {};
        return (
            <Grid
                container
                direction="row"
                spacing={3}
            >
                <Grid item xs={6}>
                    Номер объекта:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => objectFields.number = input} type="text" placeholder="new object's number" />
                </Grid>
                <Grid item xs={6}>
                    Название объекта:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => objectFields.name = input} type="text" placeholder="new object's name" />
                </Grid>
                <Grid item xs={6}>
                    Класс объекта:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => objectFields.object_class = input} type="text" placeholder="new object's class" />
                </Grid>
                <Grid item xs={6}>
                    Особые условия содержания:
                </Grid>
                <Grid item xs={6}>
                    <textarea ref={input => objectFields.containment_procedures = input} placeholder="new object's containment procedures" />                </Grid>
                <Grid item xs={6}>
                    Описание:
                </Grid>
                <Grid item xs={6}>
                    <textarea ref={input => objectFields.description = input} placeholder="new object's description" />                </Grid>
                <Grid item xs={12}>
                    <button onClick={() => this.handleNew(objectFields)}>create</button>
                </Grid>
            </Grid>
        )
    }
}

export default NewObjectForm
