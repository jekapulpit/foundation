import React from "react"
import {Link} from "react-router-dom";

const Article = props => {
    return (
        <div className="article">
            <Link className='article-link' to={"/articles/" + props.article.name} >
                {props.article.title}
            </Link>
        </div>
    )
};

export default Article
