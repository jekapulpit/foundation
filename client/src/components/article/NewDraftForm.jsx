import React from "react"
import Grid from '@material-ui/core/Grid';
import {getTokenFromCookie} from "../../services/cookieServices";
import {mapFieldsToValues} from "../../services/mapFieldsToValuesService";
import {getCurrentUser} from "../../services/localStorageServices";

class NewDraftForm extends React.Component {
    handleNew = (newDraftValues) => {
        fetch(`http://localhost:3001/api/v4/drafts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getTokenFromCookie()
                },
                body: JSON.stringify({ draft: mapFieldsToValues(newDraftValues) })
            },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                window.location = ('/profile/' + getCurrentUser().id + '/drafts/' + data.draft.name)
            })
    };

    render() {
        let draftFields = {};
        return (
            <Grid
                container
                direction="row"
                spacing={3}
            >
                <Grid item xs={6}>
                    Название страницы:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => draftFields.name = input} type="text" placeholder="new Draft's name" />
                </Grid>
                <Grid item xs={6}>
                    Заголовок:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => draftFields.title = input} type="text" placeholder="new Draft's title" />
                </Grid>
                <Grid item xs={6}>
                    Тип страницы:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => draftFields.article_type = input} type="text" placeholder="new Draft's type" />
                </Grid>
                <Grid item xs={6}>
                    Содержание:
                </Grid>
                <Grid item xs={6}>
                    <textarea ref={input => draftFields.body = input} placeholder="new Draft's body" />
                </Grid>
                <Grid item xs={12}>
                    <button onClick={() => this.handleNew(draftFields)}>create</button>
                </Grid>
            </Grid>
        )
    }
}

export default NewDraftForm
