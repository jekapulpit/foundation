import React from "react"

const ObjectFields = props => {
        return (
            <React.Fragment>
                    <div className="object-list">
                        <p>{`SCP-${props.currentObject.number} - ${props.currentObject.name}`}</p>
                        <p>Особые условия содержания: {props.currentObject.containment_procedures}</p>
                        <p>Описание: {props.currentObject.description}</p>
                    </div>
                    <button onClick={() => props.handleEdit()}>edit</button>
            </React.Fragment>
        )
};

export default ObjectFields
