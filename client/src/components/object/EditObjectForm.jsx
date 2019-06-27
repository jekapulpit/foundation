import React from "react"
import Grid from '@material-ui/core/Grid';

const EditObjectForm = props => {
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
                <input ref={input => objectFields.number = input} type="text" defaultValue={props.currentObject.number} />
            </Grid>
            <Grid item xs={6}>
                Название объекта:
            </Grid>
            <Grid item xs={6}>
                <input ref={input => objectFields.name = input} type="text" defaultValue={props.currentObject.name} />
            </Grid>
            <Grid item xs={6}>
                Класс объекта:
            </Grid>
            <Grid item xs={6}>
                <input ref={input => objectFields.object_class = input} type="text" defaultValue={props.currentObject.object_class} />
            </Grid>
            <Grid item xs={6}>
                Особые условия содержания:
            </Grid>
            <Grid item xs={6}>
                <textarea ref={input => objectFields.containment_procedures = input} defaultValue={props.currentObject.containment_procedures} />
            </Grid>
            <Grid item xs={6}>
                Описание:
            </Grid>
            <Grid item xs={6}>
                <textarea ref={input => objectFields.description = input} defaultValue={props.currentObject.description} />
            </Grid>
            <button onClick={() => props.handleEdit(objectFields)}>update</button>
        </Grid>
    )
};

export default EditObjectForm
