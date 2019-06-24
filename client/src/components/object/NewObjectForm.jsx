import React from "react"

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
                    'Content-Type': 'application/json'
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
            <React.Fragment>
                <div className="object-list">
                    SCP-<input ref={input => objectFields.number = input} type="text" placeholder="new object's number" />
                    <input ref={input => objectFields.name = input} type="text" placeholder="new object's name" />
                    Класс объекта: <input ref={input => objectFields.object_class = input} type="text" placeholder="new object's class" />
                    Особые условия содержания: <textarea ref={input => objectFields.containment_procedures = input} placeholder="new object's containment procedures" />
                    Описание: <textarea ref={input => objectFields.description = input} placeholder="new object's description" />
                </div>
                <button onClick={() => this.handleNew(objectFields)}>create</button>
            </React.Fragment>
        )
    }
}

export default NewObjectForm
