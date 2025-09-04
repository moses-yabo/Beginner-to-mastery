class Modal {
  constructor() {
    this._modal = document.querySelector('#modal');
    this._modalBtn = document.querySelector('#modal-btn');
    this._addEventListeners();
  }

  _open() {
    this._modal.style.display = 'block';
  }
  _close() {
    this._modal.style.display = 'none';
  }
  _outsideClick(e) {
    if (e.target === this._modal) {
      this._close();
    }
  }

  _addEventListeners() {
    this._modalBtn.addEventListener('click', this._open.bind(this));
    window.addEventListener('click', this._outsideClick.bind(this));
    document.addEventListener('closemodal', () => this._close());
  }
}
export default Modal;
