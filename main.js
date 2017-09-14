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

  var $car = document.createElement('div')
  $car.setAttribute('class', 'col s3 car-container')

  var $carLink = document.createElement('a')
  $carLink.setAttribute('class', 'icon-title')
  $carLink.setAttribute('href', '')
  $carLink.textContent = car.year + ' ' + car.make + ' ' + car.model

  var $carImg = document.createElement('img')
  $carImg.setAttribute('class', 'car-icon')
  $carImg.setAttribute('src', car.imgSrc)
  $carImg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  $car.appendChild($carLink)
  $car.appendChild($carImg)

  return $car
}

function createCarLinks(cars) {
  var $carList = document.querySelector('.car-list')
  for (var i = 0; i < cars.length; i++) {
    $carList.appendChild(renderCar(cars[i]))
  }
}

createCarLinks(cars)
