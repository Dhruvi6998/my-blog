import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to My Blog</h1>
            <p className="home-paragraph">
                This is a space where technology meets creativity. Dive into articles about programming, development tips,
                and insights from the world of software engineering. Whether you're just starting out or you're an experienced developer,
                there's something here for you.
            </p>
            <p className="home-paragraph">
                Explore tutorials, opinions, and ideas that help you grow and stay updated in the fast-moving tech world.
            </p>

            <Link to="/articles" className="home-button">Read Articles</Link>

            <div className="featured-article">
                <h2>Featured: Getting Started with React</h2>
                <p>
                    React is one of the most powerful and popular JavaScript libraries for building interactive UIs.
                    In this post, you'll learn the basics of components, state, and props to kickstart your React journey.
                </p>
                <Link to="/articles/learn-react-basics" className="read-more-link">Read More →</Link>
            </div>
            <div className="featured-article">
                <h2>Featured: Getting Started with React Hooks</h2>
                <p>
                   React hooks allow developers to use state and lifecycle features in functional components. Two of the most commonly used hooks are useState and useEffect.
                </p>
                <Link to="/articles/react-hooks" className="read-more-link">Read More →</Link>
            </div>
            <div className="featured-article">
                <h2>Featured: Building a Responsive Layout with Tailwind CSS</h2>
                <p>
                   Tailwind CSS is a utility-first framework that lets you build custom, responsive designs directly in your HTML. It simplifies styling by allowing you to use predefined classes for layout, spacing, typography, and more.                </p>
                <Link to="/articles/tailwind-layout" className="read-more-link">Read More →</Link>

            </div>
            <div className="featured-article">
                <h2>Featured: Introduction to Routing in Next.js</h2>
                <p>
                    Next.js simplifies routing by using the file system. Each file in the 'pages' directory automatically becomes a route — no need for additional routing libraries.                </p>

                <Link to="/articles/nextjs-routing" className="read-more-link">Read More →</Link>
            </div>

        </div>
    );
};

export default HomePage;
