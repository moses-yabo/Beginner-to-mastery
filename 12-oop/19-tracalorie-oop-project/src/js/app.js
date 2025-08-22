import '@fortawesome/fontawesome-free/js/all';
import { Modal, Collapse } from 'bootstrap';
import CalorieTrackerBase from './Tracker.js';
import { Meal, Workout } from './Items.js';
import '../css/bootstrap.css';
import '../css/style.css';

class App {
  constructor() {
    this.tracker = new CalorieTrackerBase();
    this.tracker.loadItems();
    this._loadEventListeners();
  }

  _loadEventListeners() {
    document
      .querySelector('#meal-form')
      .addEventListener('submit', this._newItem.bind(this, 'meal'));
    document
      .querySelector('#workout-form')
      .addEventListener('submit', this._newItem.bind(this, 'workout'));
    document
      .querySelector('#meal-items')
      .addEventListener('click', this._removeItem.bind(this, 'meal'));
    document
      .querySelector('#workout-items')
      .addEventListener('click', this._removeItem.bind(this, 'workout'));
    document
      .querySelector('#filter-meals')
      .addEventListener('keyup', this._filterItems.bind(this, 'meal'));
    document
      .querySelector('#filter-workouts')
      .addEventListener('keyup', this._filterItems.bind(this, 'workout'));
    document
      .querySelector('#reset')
      .addEventListener('click', this._reset.bind(this));
    document
      .querySelector('#limit-form')
      .addEventListener('submit', this._setLimit.bind(this));
  }

  _newItem(type, e) {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value) {
      alert('Please enter a meal name and calories');
      return;
    }
    const mealData = new Meal(
      ...Object.values({
        name: e.target[0].value,
        calories: Number(e.target[1].value),
      })
    );
    const workoutData = new Workout(
      ...Object.values({
        name: e.target[0].value,
        calories: Number(e.target[1].value),
      })
    );

    if (type === 'meal') {
      this.tracker.addMeal(mealData);
      this.tracker._displayMeals(mealData);
    }

    if (type === 'workout') {
      this.tracker.addWorkout(workoutData);
      this.tracker._displayWorkouts(workoutData);
    }
    e.target[0].value = '';
    e.target[1].value = '';
    const collapse = document.querySelector(`#collapse-${type}`);
    const bsCollapese = new Collapse(collapse, {
      toggle: true,
    });
    this.tracker._renderStats();
  }

  _removeItem(type, e) {
    if (
      e.target.classList.contains('fa-xmark') ||
      e.target.classList.contains('delete')
    ) {
      if (confirm('Are you sure you want to delete this item?')) {
        console.log('delete');
      }
      const card = e.target.closest('.card');
      const id = card.dataset.id;

      // Remove from meals
      type === 'meal'
        ? this.tracker._removeMeal(id)
        : this.tracker._removeWorkout(id);

      // Remove from UI
      card.remove();
    }
  }

  _filterItems(type, e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(`#${type}-items .card`).forEach((item) => {
      const name =
        item.firstElementChild.firstElementChild.textContent.toLocaleLowerCase();
      if (name.indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  _reset() {
    this.tracker.reset();
    document.querySelector('#meal-items').innerHTML = '';
    document.querySelector('#workout-items').innerHTML = '';
    document.querySelector('#filter-meals').value = '';
    document.querySelector('#filter-workouts').value = '';
    this.tracker._renderStats();
  }
  _setLimit(e) {
    e.preventDefault();
    const limit = document.querySelector('#limit');
    if (!limit.value || isNaN(limit.value)) {
      alert('Please enter a calorie limit');
      return;
    }
    this.tracker.setLimit(limit.value);

    limit.value = '';
    const modalEl = document.querySelector('#limit-modal');
    const modal = Modal.getInstance(modalEl);
    modal.hide();
  }
}
const app = new App();
