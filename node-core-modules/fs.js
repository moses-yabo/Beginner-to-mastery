// const fs = require('fs');
const { error } = require('console');
const fs = require('fs/promises');
//Write to a file

// Callback version

// fs.writeFile('file.txt', 'Heelo', (err) => {
//   if (err) throw err;
//   console.log('file created');
// });

//Promise Version

// fs.writeFile('file2.txt', 'Hello world')
//   .then(() => console.log('File created'))
//   .catch((err) => console.log(err));

//Sync Version

// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File created');

//Async/ Await version

async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('File created');
  } catch (err) {
    console.log(error);
  }
}
// createFile('file4.txt', 'Hello World');

//Read from a file

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFile('file.txt');
readFile('file2.txt');
readFile('file3.txt');
readFile('file4.txt');
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

// deleteFile('file.txt');

//Rename a File

async function rename(fileName, newName) {
  try {
    fs.rename(fileName, newName);
    console.log(`File:${fileName} renamed to: ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

// rename('file4.txt', 'my-renamed-file.txt');

//Create a Folder
async function makeFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder: ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}

makeFolder('folder');
