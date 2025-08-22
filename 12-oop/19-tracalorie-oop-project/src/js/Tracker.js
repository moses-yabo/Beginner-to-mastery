import Storage from './Storage.js';
class CalorieTrackerBase {
  constructor() {
    this._calorieLimit = Storage.getCalorie('calorieLimit') || 2000;
    this._totalCalories = Storage.getCalorie('totalCalories') || 0;
    this._caloriesConsumed = 0;
    this._caloriesBurned = 0;
    this.remaining = 0;
    this._meals = Storage.getData('meals');
    this._workouts = Storage.getData('workouts');
    this._renderStats();
  }

  // Getters
  get Meals() {
    return this._meals;
  }

  get Workouts() {
    return this._workouts;
  }
  get totalCalories() {
    return this._totalCalories;
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
    this._renderStats();
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
    this._renderStats();
  }

  set totalCalories(value) {
    if (isNaN(value) || value < 0) {
      return;
    }
    Storage.setCalorie('totalCalories', value);
    this._renderStats();
  }
  //Public Methods

  addMeal(meal) {
    this._totalCalories += meal.calories;
    this.Meals = meal;
    this.totalCalories = this._totalCalories;
    // Storage.setCalorie('totalCalories', this.totalCalories);
    this._renderStats();
  }
  addWorkout(workout) {
    this._totalCalories -= workout.calories;
    this.totalCalories = this._totalCalories;

    this.Workouts = workout;
    this._renderStats();
  }
  loadItems() {
    this._meals.forEach((meal) => this._displayMeals(meal));
    this._workouts.forEach((workout) => this._displayWorkouts(workout));
  }

  //Private Methods

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
      caloriesConsumedEl.textContent = this._caloriesConsumed;
    }
  }
  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.querySelector('#calories-remaining');
    this.remaining = Math.max(0, this._calorieLimit - this._totalCalories);
    console.log('Remaining', this.remaining);

    if (this.remaining <= 0 || this.remaining > this._calorieLimit) {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        'bg-light'
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add(
        'bg-danger'
      );
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.add('bg-light');
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        'bg-danger'
      );
    }
    caloriesRemainingEl.textContent = this.remaining;
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

    const netCalories = this._totalCalories;

    const percentage = (netCalories / this._calorieLimit) * 100;

    progressBar.style.width = `${Math.min(percentage, 100)}%`;

    if (netCalories > this._calorieLimit) {
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
    const meals = this.Meals.filter((meal) => meal.id !== id);
    console.table('REMOVED MEAL', meals);

    Storage.removeItem('meals', JSON.stringify(meals));
    this._renderStats();
  }
  _removeWorkout(id) {
    const workouts = (this.Workouts = this.Workouts.filter(
      (workout) => workout.id !== id
    ));
    Storage.removeItem('workouts', JSON.stringify(workouts));
    this._renderStats();
  }

  reset() {
    Storage.clearStorage();
    this._renderStats();
  }
  setLimit(limit) {
    this._calorieLimit = limit;
    Storage.setCalorie('calorieLimit', limit);
    this._displayCalorieLimit();
    this._renderStats();
  }
  _renderStats() {
    this._meals = Storage.getData('meals') || [];
    this._workouts = Storage.getData('workouts') || [];
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesTotal();
    this._displayCalorieLimit();
    this._displayProgressBar();

    const mealItems = document.querySelector('#meal-items');
    const workoutItems = document.querySelector('#workout-items');
    mealItems.innerHTML = '';
    workoutItems.innerHTML = '';
    this.loadItems();
  }
}
export default CalorieTrackerBase;
