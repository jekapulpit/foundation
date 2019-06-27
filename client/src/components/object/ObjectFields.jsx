import React from "react"

const ObjectFields = props => {
        return (
            <React.Fragment>
                <p>{`SCP-${props.currentObject.number} - ${props.currentObject.name}`}</p>
                <p>Класс объекта: {props.currentObject.object_class}</p>
                <p>Особые условия содержания: {props.currentObject.containment_procedures}</p>
                <p>Описание: {props.currentObject.description}</p>
                <button onClick={() => props.handleEdit()}>edit</button>
            </React.Fragment>
        )
};

export default ObjectFields
