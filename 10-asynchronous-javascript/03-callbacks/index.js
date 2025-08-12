const toggle = (e) => {
  e.target.classList.toggle('danger');
};
document.querySelector('button').addEventListener('click', toggle);
const posts = [
  {
    id: 'Post 1',
    title: 'this is post one',
  },
  {
    id: 'Post 2',
    title: 'this is post two',
  },
  {
    id: 'Post 3',
    title: 'this is post three',
  },
  {
    id: 'Post 4',
    title: 'this is post four',
  },
  {
    id: 'Post 5',
    title: 'this is post five',
  },
];
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}
function getPost() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong> ${post.id}</strong> - <span> ${post.title} </span>`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 3000);
}

createPost({ id: ' Post 6', title: 'this is post 6' }, getPost);
