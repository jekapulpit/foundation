import React from "react"

const ArticleFields = props => {
        return (
            <React.Fragment>
                <p>{props.currentArticle.title}</p>
                <div>
                    {props.currentArticle.body}
                </div>
                <button onClick={() => props.handleEdit()}>edit</button>
            </React.Fragment>
        )
};

export default ArticleFields
