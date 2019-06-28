import React from "react"
import {connect} from "react-redux";
import ArticleFields from "./article/ArticleFields";
import EditArticleForm from "./article/EditArticleForm";
import { SET_ARTICLE, HANDLE_EDIT, HANDLE_UPDATE } from '../actionTypes'
import { getTokenFromCookie } from "../services/cookieServices";
import '../stylesheets/components/ArticlePage.scss'

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/v4/articles/${this.props.match.params.id}`, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getTokenFromCookie()
            },
        })
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleSetArticle(data)
            })
    }

    mapFieldsToValues = (fields) => {
        let newArticle = fields;
        for (var key in newArticle) {
            newArticle[key] = fields[key].value
        }
        return newArticle;
    };

    handleUpdate = (newArticleValues) => {
        fetch(`http://localhost:3001/api/v4/articles/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getTokenFromCookie()
            },
            body: JSON.stringify({ article: newArticleValues })
        },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                this.props.toggleHandleUpdate(data);
                window.location = ('/articles/' + data.article.name)
            })
    };

    handleEdit = (ArticleFields = {}) => {
        if(this.props.currentArticle.editable){
            this.handleUpdate(this.mapFieldsToValues(ArticleFields))
        }
        this.props.toggleHandleEdit(this.props.currentArticle.editable)
    };

    handleDelete = () => {
        fetch(`http://localhost:3001/api/v4/articles/${this.props.currentArticle.name}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getTokenFromCookie()
                },
            },
        )
            .then((response) => { return response.json() })
            .then((data) => {
                window.location = ('/articles/')
            })
    };

    render() {
        let ArticleView = !this.props.currentArticle.editable ?
            (<ArticleFields handleEdit={this.handleEdit} currentArticle={this.props.currentArticle} />)
            :
            (<EditArticleForm handleEdit={this.handleEdit} currentArticle={this.props.currentArticle}/>);
        return (
            <div className={"container"}>
                <div className="Article-page">
                    {ArticleView}
                    <button className="button delete" onClick={() => this.handleDelete()}>delete Article</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentArticle: state.article.currentArticle,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleSetArticle: (data) => {
            dispatch({ type: SET_ARTICLE, currentArticle: data.article })
        },
        toggleHandleEdit: (editable) => {
            dispatch({ type: HANDLE_EDIT, editable: editable })
        },
        toggleHandleUpdate: (data) => {
            dispatch({ type: HANDLE_UPDATE, currentArticle: data.article })
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)
