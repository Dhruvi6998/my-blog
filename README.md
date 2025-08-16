# my-blog
Frontend 
Change vite.config.js 
// vite.config.js
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', //Add your backend url

