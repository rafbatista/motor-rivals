/* eslint-disable no-unused-vars */

var cars = [
  {
    year: 2018,
    make: 'Audi',
    model: 'A5',
    imgSrc: 'images/audi-a5-2018.jpg'
  },
  {
    year: 2018,
    make: 'BMW',
    model: '430i',
    imgSrc: 'images/bmw-430i-2018.jpg'
  },
  {
    year: 2018,
    make: 'Cadillac',
    model: 'ATS Coupe',
    imgSrc: 'images/cadillac-ats-coupe-2018.jpg'
  },
  {
    year: 2017,
    make: 'Infiniti',
    model: 'Q60',
    imgSrc: 'images/infiniti-q60-2017.jpg'
  },
  {
    year: 2017,
    make: 'Lexus',
    model: 'RC 200t',
    imgSrc: 'images/lexus-rc200t-2017.jpg'
  },
  {
    year: 2018,
    make: 'Mercedez-Benz',
    model: 'C300 Coupe',
    imgSrc: 'images/mercedez-benz-c300-coupe-2018.jpg'
  }
]

function renderCar(car) {
  /*
  <div class="col s3">
    <a class="icon-title" href="2018 Audi A5">2018 Audi A5</a>
    <img class="car-icon" src="images/audi-a5-2018.jpg" alt="2018 Audi A5"/>
  </div> */

  // This creates the div container for car info //
  var $car = document.createElement('div')
  $car.setAttribute('class', 'col s3')

  // This creates the link/title for the car. //
  var $carlink = document.createElement('a')
  $carlink.setAttribute('class', 'icon-title')
  $carlink.setAttribute('href', '')
  $carlink.textContent = car.year + ' ' + car.make + ' ' + car.model

  // This creates the image of the car below title //
  var $carimg = document.createElement('img')
  $carimg.setAttribute('class', 'car-icon')
  $carimg.setAttribute('src', car.imgSrc)
  $carimg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  /* This should complete the function by adding all the above elements to create
  above example in the DOM */
  $car.appendChild($carlink)
  $car.appendChild($carimg)
  return $car
}
