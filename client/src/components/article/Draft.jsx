import React from "react"
import {Link} from "react-router-dom";

const Draft = props => {
    return (
        <div className="article">
            <Link to={`/profile/${props.userId}/drafts/${props.draft.name}`} >
                {props.draft.title}
            </Link>
        </div>
    )
};

export default Draft
