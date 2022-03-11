var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'main',
    repo: 'https://github.com/shravankumar-fs/svelte-feedback-app.git', // Update to point to your repository
    user: {
      name: 'Shravan kumar', // update to use your name
      email: 'star.dragon.king.fd@gmail.com', // Update to use your email
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
