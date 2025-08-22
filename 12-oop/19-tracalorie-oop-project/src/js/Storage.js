class Storage {
  static getCalorie(type) {
    let calorie;
    if (localStorage.getItem(type) === null) {
      calorie = 0;
    } else {
      calorie = +localStorage.getItem(type);
    }
    return calorie;
  }
  static getData(type, defaultData = []) {
    const data = localStorage.getItem(type);
    return data ? JSON.parse(data) : defaultData;
  }
  static setCalorie(type, calorie) {
    localStorage.setItem(type, calorie);
  }
  static addItem(type, data) {
    let items = JSON.parse(localStorage.getItem(`${type}`));

    if (!items) items = [];
    items.push(data);
    localStorage.setItem(`${type}`, JSON.stringify(items));
  }

  static removeItem(type, data) {
    localStorage.setItem(type, data);
  }
  static clearStorage() {
    localStorage.clear();
  }
}
export default Storage;
