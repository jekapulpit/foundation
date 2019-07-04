import React from "react"

const DraftFields = props => {
        return (
            <React.Fragment>
                <p>{props.currentDraft.title}</p>
                <div>
                    {props.currentDraft.body}
                </div>
                <button onClick={() => props.handleEdit()}>edit</button>
            </React.Fragment>
        )
};

export default DraftFields
