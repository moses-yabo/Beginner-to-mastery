const post = {
  id: 1,
  title: 'Post one',
  body: 'This is the body',
};

//Convert to JSON

const str = JSON.stringify(post);
console.log(str);
//Parse JSOn

const obj = JSON.parse(str);
console.log(obj);

const posts = [
  {
    id: 1,
    title: 'Post one',
    body: 'This is the HAnds',
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the Chest',
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is the Head',
  },
  {
    id: 4,
    title: 'Post 4',
    body: 'This is the Face',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
