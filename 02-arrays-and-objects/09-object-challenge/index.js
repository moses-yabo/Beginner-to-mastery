const libraries = [
  {
    title: 'Lip of Ice',
    author: 'Ryan Kruger',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Unyana womntu',
    author: 'Steven Segal',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Martial Art',
    author: 'Jackie chan',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

const [frist, sec, third] = libraries;
frist.status.read = true;
sec.status.read = true;
third.status.read = true;
console.log(libraries);
const { title: firstBook } = frist;
console.log(firstBook);

const libraryJson = JSON.stringify(libraries);
console.log(libraryJson);
