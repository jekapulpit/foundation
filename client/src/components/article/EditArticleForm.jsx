import React from "react"
import Grid from '@material-ui/core/Grid';

const EditArticleForm = props => {
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
                    <input ref={input => articleFields.name = input} type="text" defaultValue={props.currentArticle.name} />
                </Grid>
                <Grid item xs={6}>
                    Заголовок:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => articleFields.title = input} type="text" defaultValue={props.currentArticle.title} />
                </Grid>
                <Grid item xs={6}>
                    Тип страницы:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => articleFields.article_type = input} type="text" defaultValue={props.currentArticle.article_type} />
                </Grid>
                <Grid item xs={6}>
                    Содержание:
                </Grid>
                <Grid item xs={6}>
                    <textarea ref={input => articleFields.body = input} defaultValue={props.currentArticle.body} />
                </Grid>
                <Grid item xs={12}>
                    <button onClick={() => props.handleEdit(articleFields)}>update</button>
                </Grid>
            </Grid>
    )
};

export default EditArticleForm
