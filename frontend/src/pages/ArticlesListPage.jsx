import ArticlesList from '../components/ArticlesList';
import articles from './article-content';
import '../App.css';

const ArticlesListPage = () => {
    return (
        <div className="article-container">
            <h1 className="article-title">Articles</h1>
            <ArticlesList articles={articles} />
        </div>
    );
};

export default ArticlesListPage;
