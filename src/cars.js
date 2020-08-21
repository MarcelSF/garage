const updateCarList = (garage) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const carList = document.querySelector('.cars-list')
      carList.innerHTML = '';
      data.forEach((car) => {
        const carHtml = `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand}${car.model}" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div>`
        carList.insertAdjacentHTML('beforeend', carHtml)
      })
    });
};

const buildCar = () => {
  const carBrand = document.querySelector('#brand').value
  const carModel = document.querySelector('#model').value
  const carOwner = document.querySelector('#owner').value
  const carPlate = document.querySelector('#plate').value

  const newCar = {
    "brand": carBrand,
    "model": carModel,
    "owner": carOwner,
    "plate": carPlate
  }
  return newCar
}

const postCar = (garage) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(buildCar())
  })
}


export { updateCarList, postCar }
