import React from "react"
import Grid from '@material-ui/core/Grid';
import {getTokenFromCookie} from "../../services/cookieServices";

class NewArticleForm extends React.Component {
    mapFieldsToValues = (fields) => {
        let newArticle = fields;
        for (var key in newArticle) {
            newArticle[key] = fields[key].value
        }
        return newArticle;
    };

    handleNew = (newArticleValues) => {
        fetch(`http://localhost:3001/api/v4/articles/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getTokenFromCookie()
                },
                body: JSON.stringify({ article: this.mapFieldsToValues(newArticleValues) })
            },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                window.location = ('/articles/')
            })
    };

    render() {
        let articleFields = {};
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
                    <input ref={input => articleFields.name = input} type="text" placeholder="new Article's name" />
                </Grid>
                <Grid item xs={6}>
                    Заголовок:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => articleFields.title = input} type="text" placeholder="new Article's title" />
                </Grid>
                <Grid item xs={6}>
                    Тип страницы:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => articleFields.article_type = input} type="text" placeholder="new Article's type" />
                </Grid>
                <Grid item xs={6}>
                    Содержание:
                </Grid>
                <Grid item xs={6}>
                    <textarea ref={input => articleFields.body = input} placeholder="new Article's body" />
                </Grid>
                <Grid item xs={12}>
                    <button onClick={() => this.handleNew(articleFields)}>create</button>
                </Grid>
            </Grid>
        )
    }
}

export default NewArticleForm
