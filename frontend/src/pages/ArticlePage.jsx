import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import articles from './article-content';
import NotfoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';
import '../App.css'; // make sure the CSS is imported

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false});
    const { canUpvote } = articleInfo;
    const { articleId } = useParams();
    
    const { user, isLoading } = useUser();

    useEffect(() => {
    const loadArticleInfo = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken : token } : {};
        const response = await axios.get(`/api/articles/${articleId}` , {
            headers: { authtoken: token},
        });
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
    }
    if (isLoading) {
    loadArticleInfo();
    }
    }, [isLoading,user]);

    
    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
          const token = user && await user.getIdToken();
        const headers = token ? {authtoken : token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }
    
    if (!article) {
        return <NotfoundPage />
    }
    return (
        <>
         <div className="article-container">
            <h1 className="article-title">{article.title}</h1>
           <div className = "upvotes-section">
            {user 
            ? <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
            :<button>Log in to upvote</button>}
            <p>This article has {articleInfo?.upvotes ?? 0} upvote(s)</p>
            </div>
            {article.content.map((paragraph, index) => (
                <p className="article-paragraph" key={index}>{paragraph}</p>
                
            ))}
            {user
            ? <AddCommentForm 
                articleName = {articleId}
                onArticleUpdated = {updatedArticle => setArticleInfo(updatedArticle)} />
              : <button>Login to add a comment</button>}
                

           <CommentsList comments={articleInfo.comments || []} />

        </div>
        </>
       
    );
};

export default ArticlePage;
