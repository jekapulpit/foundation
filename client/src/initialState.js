import { syncronizeCurrentUser } from './services/authentificationService'

export default  {
    user: {
        users: [{ name: 'eugene' }],
        currentUser: syncronizeCurrentUser(),
    },
    object: {
        objectList: [],
        currentObject: {}
    }
};
