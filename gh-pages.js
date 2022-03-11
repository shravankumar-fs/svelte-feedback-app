var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/shravankumar-fs/svelte-feedback-app.git', // Update to point to your repository
    user: {
      name: 'Shravan kumar',
      email: 'star.dragon.king.fd@gmail.com',
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
