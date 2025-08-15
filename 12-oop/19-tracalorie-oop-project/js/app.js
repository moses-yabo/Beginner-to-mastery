class CalorieTrackerBase {
  constructor() {
    this._calorieLimit = 2001;
    this._totalCalories = 0;
    this._caloriesConsumed = 0;
    this._caloriesBurned = 0;
    this._meals = [];
    this._workouts = [];
    document.addEventListener('DOMContentLoaded', this._renderStats.bind(this));
  }
  //Public Methods

  addMeal(meal) {
    this._meals.push(meal);
    this._caloriesConsumed = this._totalCalories += meal.calories;
  }
  addWorkout(workout) {
    this._workouts.push(workout);

    this._caloriesBurned = this._totalCalories -= workout.calories;
  }

  //Private Methods

  _displayCalories() {}
  _displayCalorieLimit() {
    const calorieLimit = document.querySelector('#calories-limit');
    calorieLimit.textContent = this._calorieLimit;
  }
  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.querySelector('#calories-consumed');
    this._caloriesConsumed = this._meals.reduce(
      (acc, curr) => acc + Number(curr.calories),
      0
    );
    caloriesConsumedEl.textContent = this._caloriesConsumed;
  }
  _displayCaloriesRemaining() {}
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.querySelector('#calories-total');
    totalCaloriesEl.textContent = this._totalCalories;
  }
  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.querySelector('#calories-burned');
    this._caloriesBurned = this._workouts.reduce(
      (acc, curr) => acc + Number(curr.calories || 0),
      0
    );
    caloriesBurnedEl.textContent = this._caloriesBurned;
  }

  _renderStats() {
    console.log('Hi');

    this._displayCaloriesTotal();
    this._displayCalorieLimit();
    this._displayCaloriesBurned();
    this._displayCaloriesConsumed();
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
const tracker = new CalorieTrackerBase();

const breakfast = new Meal('Breakfast', 500);
tracker.addMeal(breakfast);
const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
console.log(tracker._displayCaloriesBurned());
