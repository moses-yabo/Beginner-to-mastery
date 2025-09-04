/* @jest-environment jsdom
 */
const hasDuplicateIds = require('./hasduplicatedids');
describe('DOM Tree Has Duplicate ID s', () => {
  let root;
  beforeEach(() => {
    console.log('beforeEach ran');

    //mock elements
    root = document.createElement('div');
    const childElement1 = document.createElement('div');
    const childElement2 = document.createElement('div');
    root.appendChild(childElement1);
    root.appendChild(childElement2);
  });
  afterEach(() => {
    console.log('afterEach ran');
    root = null;
  });
  it('should be a function', () => {
    expect(typeof hasDuplicateIds).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof hasDuplicateIds()).toEqual('boolean');
  });
  it('should return true if it has duplicated IDS', () => {
    root.id = 'root';
    root.children[0].id = 'child';
    root.children[1].id = 'child';
    const results = hasDuplicateIds(root);

    expect(results).toBeTruthy();
  });

  it('should return false if there are no duplicated IDS', () => {
    root.id = 'root';
    root.children[0].id = 'child1';
    root.children[1].id = 'child2';
    const results = hasDuplicateIds(root);

    expect(results).toBeFalsy();
  });
});
