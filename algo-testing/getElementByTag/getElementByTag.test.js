/* @jest-environment jsdom
 */
const getElementByTag = require('./getElementByTag');

describe('Get Elements By Tag', () => {
  it('should be a function', () => {
    expect(typeof getElementByTag).toEqual('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getElementByTag())).toBeTruthy();
  });

  it('should return an empty array if no root is passed in', () => {
    expect(getElementByTag()).toEqual([]);
  });

  it('should only the root element if no tagName is passed in', () => {
    const root = document.createElement('div');

    expect(getElementByTag(root)).toEqual([root]);
  });

  it('should return the correct elements', () => {
    const root = document.createElement('div');
    // Add some child elements to the root
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const span = document.createElement('span');
    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);
    const result = getElementByTag(root, 'p');
    expect(result).toEqual([p1, p2]);
  });
});
