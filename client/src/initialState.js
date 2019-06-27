import { syncronizeCurrentUser } from './services/authentificationService'
import { getTokenFromCookie } from "./services/cookieServices";

export default  {
    user: {
        users: [],
        currentUser: (getTokenFromCookie() ? syncronizeCurrentUser() : null),
    },
    object: {
        objectList: [],
        currentObject: {}
    }
};
