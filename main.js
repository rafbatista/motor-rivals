var cars = [
  {
    id: 1,
    year: 2018,
    make: 'Audi',
    model: 'A5',
    imgSrc: 'images/audi-a5-2018.jpg',
    vehicleType: 'Front-engine, All-wheel-drive',
    msrp: '$43,775',
    engineType: 'Turbocharged 2.0L inline-4-cylinder',
    displacement: 'Power: 252 hp @ 6000 rpm, Torque: 273 lb-ft @ 1600 rpm',
    transmission: '7-speed dual-clutch automatic with manual shifting mode',
    zeroToSixty: '5.0 secs',
    dimensions: '184.7″ L x 72.6″ W x 54.6″ H',
    curbWeight: '3704 lbs',
    fuelEconomy: '24 city / 34 highway'
  },
  {
    id: 2,
    year: 2018,
    make: 'BMW',
    model: '430i',
    imgSrc: 'images/bmw-430i-2018.jpg',
    vehicleType: 'Front-engine, Rear-wheel-drive',
    msrp: '$43,300',
    engineType: 'Turbocharged 2.0L inline-4-cylinder',
    displacement: 'Power: 248 hp @ 5200 rpm, Torque: 295 lb-ft @ 1450 rpm',
    transmission: ' 8-speed automatic with manual shifting mode',
    zeroToSixty: '5.5 secs',
    dimensions: '183″ L x 72″ W x 54.2″ H',
    curbWeight: '3574 lbs',
    fuelEconomy: '23 city / 34 highway'
  },
  {
    id: 3,
    year: 2018,
    make: 'Cadillac',
    model: 'ATS Coupe',
    imgSrc: 'images/cadillac-ats-coupe-2018.jpg',
    vehicleType: 'Front-engine, Rear-wheel-drive',
    msrp: '$37,895',
    engineType: 'Turbocharged 2.0L inline-4-cylinder',
    displacement: 'Power: 272 hp @ 5500 rpm, Torque: 295 lb-ft @ 3000 rpm',
    transmission: ' 8-speed automatic with manual shifting mode',
    zeroToSixty: '5.6 secs',
    dimensions: '184″ L x 73″ W x 55″ H',
    curbWeight: '3418 lbs',
    fuelEconomy: '22 city / 31 highway'
  },

  {
    id: 4,
    year: 2017,
    make: 'Infiniti',
    model: 'Q60',
    imgSrc: 'images/infiniti-q60-2017.jpg',
    vehicleType: 'Front-engine, Rear-wheel-drive',
    msrp: '$39,855',
    engineType: 'Turbocharged 2.0L inline-4-cylinder',
    displacement: 'Power: 208 hp @ 5500 rpm, Torque: 258 lb-ft @ 1500 rpm',
    transmission: ' 7-speed automatic with manual shifting mode',
    zeroToSixty: '7.0 secs',
    dimensions: '184.4″ L x 72.8″ W x 54.9″ H',
    curbWeight: '3727 lbs',
    fuelEconomy: '22 city / 30 highway'
  },

  {
    year: 2017,
    make: 'Lexus',
    model: 'RC 200t',
    imgSrc: 'images/lexus-rc200t-2017.jpg',
    vehicleType: 'Front-engine, Rear-wheel-drive',
    msrp: '$40,155',
    engineType: 'Turbocharged 2.0L inline-4-cylinder',
    displacement: 'Power: 241 hp @ 5500 rpm, Torque: 258 lb-ft @ 3000 rpm',
    transmission: ' 7-speed automatic with manual shifting mode',
    zeroToSixty: '7.3 secs',
    dimensions: '184.8″ L x 72.8″ W x 54.9″ H',
    curbWeight: '3737 lbs',
    fuelEconomy: '22 city / 32 highway'
  },
  {
    year: 2018,
    make: 'Mercedez-Benz',
    model: 'C300 Coupe',
    imgSrc: 'images/mercedez-benz-c300-coupe-2018.jpg',
    vehicleType: 'Front-engine, Rear-wheel-drive',
    msrp: '$43,200',
    engineType: 'Turbocharged 2.0L inline-4-cylinder',
    displacement: 'Power: 241 hp @ 5500 rpm, Torque: 273 lb-ft @ 3000 rpm',
    transmission: ' 9-speed automatic with manual shifting mode',
    zeroToSixty: '5.9 secs',
    dimensions: '184.4″ L x 72.8″ W x 55.3″ H',
    curbWeight: '3616 lbs',
    fuelEconomy: '22 city / 30 highway'
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
