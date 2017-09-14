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

  var $carlink = document.createElement('a')
  $carlink.setAttribute('class', 'icon-title')
  $carlink.setAttribute('href', '')
  $carlink.textContent = car.year + ' ' + car.make + ' ' + car.model

  var $carimg = document.createElement('img')
  $carimg.setAttribute('class', 'car-icon')
  $carimg.setAttribute('src', car.imgSrc)
  $carimg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  $car.appendChild($carlink)
  $car.appendChild($carimg)

  return $car
}

function createCarLinks(cars) {
  var $carlist = document.querySelector('.car-list')
  for (var i = 0; i < cars.length; i++) {
    $carlist.appendChild(renderCar(cars[i]))
  }
}

createCarLinks(cars)
