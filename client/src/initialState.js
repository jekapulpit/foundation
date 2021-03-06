import { syncronizeCurrentUser } from './services/authentificationService'
import { getTokenFromCookie } from "./services/cookieServices";

export default  {
    user: {
        users: [],
        currentUser: (getTokenFromCookie() ? syncronizeCurrentUser() : null),
    },
    article: {
        articleList: [],
        currentArticle: {}
    },
    draft: {
        draftList: [],
        currentDraft: {}
    }
};
