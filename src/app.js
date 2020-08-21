// TODO: Build an awesome garage!
import {updateCarList, postCar} from './cars.js'

updateCarList('batch-447');

const carForm = document.querySelector('#new-car')
carForm.addEventListener('submit', (event) => {
  event.preventDefault();
  postCar('batch-447');
  setTimeout(updateCarList('batch-447'), 5000)
  carForm.reset();
})
