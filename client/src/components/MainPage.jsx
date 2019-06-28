import React from "react"
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { SET_ARTICLE_LIST } from "../actionTypes";
import { getTokenFromCookie } from '../services/cookieServices'
import '../stylesheets/components/MainPage.scss'
import Article from "./article/Article";

class MainPage extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3001/api/v4/articles/', {
            mode: 'cors',
            headers: {
                'Authorization': getTokenFromCookie()
            }
        })
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleSetArticleList(data)
            })
    }

    render() {
        let articles = this.props.articleList.map((article) => {
           return (<Article key={article.name} article={article} />)
        });
        return (
            <div className={"container"}>
                <div className="article-list">
                    {articles}
                </div>
                <Link to={"/create_new_article"} >
                    Create new article
                </Link>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    articleList: state.article.articleList,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleSetArticleList: (data) => {
            dispatch({ type: SET_ARTICLE_LIST, articleList: data.articles })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
