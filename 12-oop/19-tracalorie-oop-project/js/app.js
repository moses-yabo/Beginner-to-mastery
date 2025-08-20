class CalorieTrackerBase {
  constructor() {
    this._calorieLimit = Storage.getCalorieLimit();
    this._totalCalories = 0;
    this._caloriesConsumed = 0;
    this._caloriesBurned = 0;
    this.remaining = 0;
    this._meals = Storage.getData('meals');
    console.table(this._meals);

    this._workouts = Storage.getData('workouts');
    console.table(this._workouts);

    this._renderStats();
  }
  // Getters
  get Meals() {
    return this._meals;
  }

  get Workouts() {
    return this._workouts;
  }
  set Meals(value) {
    if (
      !value ||
      typeof value !== 'object' ||
      !value.name?.trim() ||
      value.calories == null
    ) {
      return;
    }
    Storage.addItem('meals', value);
  }

  set Workouts(value) {
    if (
      !value ||
      typeof value !== 'object' ||
      !value.name?.trim() ||
      value.calories == null
    ) {
      return;
    }
    Storage.addItem('workouts', value);
  }
  //Public Methods

  addMeal(meal) {
    console.log('meal', meal);

    this._totalCalories += meal.calories;
    this.Meals = meal;
  }
  addWorkout(workout) {
    this._totalCalories -= workout.calories;
    this.Workouts = workout;
  }

  //Private Methods

  _displayCalories() {}
  _displayCalorieLimit() {
    const limit = document.querySelector('#limit');
    this._calorieLimit = limit.value || this._calorieLimit;
    const calorieLimit = document.querySelector('#calories-limit');
    calorieLimit.textContent = this._calorieLimit;
  }
  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.querySelector('#calories-consumed');
    if (Array.isArray(this._meals)) {
      this._caloriesConsumed = this.Meals.reduce(
        (acc, curr) => acc + Number(curr.calories),
        0
      );
    }
    caloriesConsumedEl.textContent = this._caloriesConsumed;
  }
  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.querySelector('#calories-remaining');
    this.remaining =
      this._calorieLimit - this._caloriesConsumed + this._caloriesBurned;
    console.log('Remaining', this.remaining);

    if (this.remaining <= 0 || this.remaining > this._calorieLimit) {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        'bg-light'
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add(
        'bg-danger'
      );
      return;
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.add('bg-light');
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        'bg-danger'
      );
    }
    caloriesRemainingEl.textContent = this.remaining < 0 ? 0 : this.remaining;
  }

  _displayCaloriesTotal() {
    const totalCaloriesEl = document.querySelector('#calories-total');
    totalCaloriesEl.textContent = this._totalCalories;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.querySelector('#calories-burned');
    console.log('workouts', this._workouts);

    if (Array.isArray(this._workouts)) {
      this._caloriesBurned = this.Workouts.reduce(
        (acc, curr) => acc + Number(curr.calories || 0),
        0
      );
    }
    caloriesBurnedEl.textContent = this._caloriesBurned;
  }

  _displayProgressBar() {
    const progressBar = document.querySelector('#calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    progressBar.style.width = `${Math.min(percentage, 100)}%`;
    if (this._caloriesConsumed > this._calorieLimit) {
      progressBar.classList.add('bg-danger');
    } else {
      progressBar.classList.remove('bg-danger');
    }
  }

  _displayMeals(meal) {
    const mealItems = document.querySelector('#meal-items');
    // mealItems.innerHTML = ''; // clear previous meals

    // Create card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'my-2');
    cardDiv.setAttribute('data-id', meal.id);
    // Create card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Create meal row
    const mealRow = document.createElement('div');
    mealRow.classList.add(
      'd-flex',
      'align-items-center',
      'justify-content-between'
    );

    mealRow.innerHTML = `
      <h4 class="mx-1">${meal.name}</h4>
      <div class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">
        ${meal.calories}
      </div>
      <button class="delete btn btn-danger btn-sm mx-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    // Assemble
    cardBody.appendChild(mealRow);
    cardDiv.appendChild(cardBody);
    mealItems.appendChild(cardDiv);
  }
  _displayWorkouts(workout) {
    const workoutItems = document.querySelector('#workout-items');
    // workoutItems.innerHTML = '';

    // Create card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'my-2');
    cardDiv.setAttribute('data-id', workout.id);

    // Create card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Create workout row
    const workoutRow = document.createElement('div');
    workoutRow.classList.add(
      'd-flex',
      'align-items-center',
      'justify-content-between'
    );

    workoutRow.innerHTML = `
      <h4 class="mx-1">${workout.name}</h4>
      <div class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5">
        ${workout.calories}
      </div>
      <button class="delete btn btn-danger btn-sm mx-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    // Assemble
    cardBody.appendChild(workoutRow);
    cardDiv.appendChild(cardBody);
    workoutItems.appendChild(cardDiv);
  }
  _removeMeal(id) {
    this.Meals = this.Meals.filter((meal) => meal.id !== id);
  }
  _removeWorkout(id) {
    this.Workouts = this.Workouts.filter((workout) => workout.id !== id);
  }

  reset() {
    this.Meals = [];
    this.Workouts = [];
    this._totalCalories = 0;
    this._caloriesConsumed = 0;
    this._caloriesBurned = 0;
    this._renderStats();
  }
  setLimit(limit) {
    this._calorieLimit = limit;
    Storage.setCalorieLimit(limit);
    this._displayCalorieLimit();
    this._renderStats();
  }
  _renderStats() {
    this._displayCaloriesTotal();
    this._displayCalorieLimit();
    this._displayCaloriesBurned();
    this._displayCaloriesConsumed();
    this._displayCaloriesRemaining();
    this.Workouts.forEach((workout) => this._displayWorkouts(workout));
    this.Meals.forEach((meal) => this._displayMeals(meal));
    this._displayProgressBar();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}
class Storage {
  static getCalorieLimit(defaultLimit = 2000) {
    let calorieLimit;
    if (localStorage.getItem('calorieLimit') === null) {
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = +localStorage.getItem('calorieLimit');
    }
    return calorieLimit;
  }
  static getData(type, defaultData = []) {
    const data = localStorage.getItem(type);
    return data ? JSON.parse(data) : defaultData;
  }
  static setCalorieLimit(calorieLimit) {
    localStorage.setItem('calorieLimit', calorieLimit);
  }
  static addItem(type, data) {
    let items = JSON.parse(localStorage.getItem(`${type}`));

    if (!items) items = [];
    items.push(data);
    localStorage.setItem(`${type}`, JSON.stringify(items));
  }

  static removeItem(type, data) {
    localStorage.setItem(`${type}`, JSON.stringify([...data]));
  }
}
class App {
  constructor() {
    this.tracker = new CalorieTrackerBase();
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
    const data = new Meal(
      ...Object.values({
        name: e.target[0].value,
        calories: Number(e.target[1].value),
      })
    );

    if (type === 'meal') {
      this.tracker.addMeal(data);
      this.tracker._displayMeals(data);
    }

    if (type === 'workout') {
      this.tracker.addWorkout(data);
      this.tracker._displayWorkouts(data);
    }
    e.target[0].value = '';
    e.target[1].value = '';
    const collapse = document.querySelector(`#collapse-${type}`);
    const bsCollapese = new bootstrap.Collapse(collapse, {
      toggle: true,
    });
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

      this.tracker._renderStats();
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
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
}
const app = new App();
