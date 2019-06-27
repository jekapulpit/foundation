import React from "react"

const EditObjectForm = props => {
    let objectFields = {};
    return (
        <React.Fragment>
            SCP-<input ref={input => objectFields.number = input} type="text" defaultValue={props.currentObject.number} />
            <input ref={input => objectFields.name = input} type="text" defaultValue={props.currentObject.name} />
            Класс объекта: <input ref={input => objectFields.object_class = input} type="text" defaultValue={props.currentObject.object_class} />
            Особые условия содержания: <textarea ref={input => objectFields.containment_procedures = input} defaultValue={props.currentObject.containment_procedures} />
            Описание: <textarea ref={input => objectFields.description = input} defaultValue={props.currentObject.description} />
            <button onClick={() => props.handleEdit(objectFields)}>update</button>
        </React.Fragment>
    )
};

export default EditObjectForm
