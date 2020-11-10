const posts = [
  {
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet.'
  },
  {
    title: 'Second Post',
    content: 'Lorem ipsum dolor sit amet.'
  },
  {
    title: 'Third Post',
    content: 'Lorem ipsum dolor sit amet.'
  },
];

function getAllPosts() {
  setTimeout(() => {
    let showPosts = '';

    posts.forEach((post) => {
      showPosts += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = showPosts;
  }, 3000);
}

function addNewPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 8000);
}

addNewPost({ title: 'New Post', content: 'Lorem ipsum dolor sit amet.' }, getAllPosts);
