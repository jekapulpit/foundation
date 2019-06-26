export function mapFieldsToValues(fields) {
    let newObject = fields;
    for (var key in newObject) {
        newObject[key] = fields[key].value
    }
    return newObject;
};
