import { syncronizeCurrentUser } from './services/authentificationService'

export default  {
    user: {
        users: [],
        currentUser: syncronizeCurrentUser(),
    },
    object: {
        objectList: [],
        currentObject: {}
    }
};
