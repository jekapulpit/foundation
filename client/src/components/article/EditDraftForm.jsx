import React from "react"
import Grid from '@material-ui/core/Grid';

const EditDraftForm = props => {
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
                    <input ref={input => draftFields.name = input} type="text" defaultValue={props.currentDraft.name} />
                </Grid>
                <Grid item xs={6}>
                    Заголовок:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => draftFields.title = input} type="text" defaultValue={props.currentDraft.title} />
                </Grid>
                <Grid item xs={6}>
                    Тип страницы:
                </Grid>
                <Grid item xs={6}>
                    <input ref={input => draftFields.article_type = input} type="text" defaultValue={props.currentDraft.article_type} />
                </Grid>
                <Grid item xs={6}>
                    Содержание:
                </Grid>
                <Grid item xs={6}>
                    <textarea ref={input => draftFields.body = input} defaultValue={props.currentDraft.body} />
                </Grid>
                <Grid item xs={12}>
                    <button onClick={() => props.handleEdit(draftFields)}>update</button>
                </Grid>
            </Grid>
    )
};

export default EditDraftForm
