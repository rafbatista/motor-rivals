var cars = [
  {
    id: 1,
    year: 2018,
    make: 'Audi',
    model: 'A5',
    imgSrc: 'images/audi-a5-2018.jpg',
    specifications: {
      vehicleType: 'Front-engine, All-wheel-drive',
      msrp: '$43,775',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 252 hp @ 6000 rpm, Torque: 273 lb-ft @ 1600 rpm',
      transmission: '7-speed dual-clutch automatic with manual shifting mode (6-speed manual optional)',
      zeroToSixty: '5.0 secs',
      dimensions: '184.7″ L x 72.6″ W x 54.6″ H',
      curbWeight: '3704 lbs',
      fuelEconomy: '24 city / 34 highway'
    }
  },
  {
    id: 2,
    year: 2018,
    make: 'BMW',
    model: '430i',
    imgSrc: 'images/bmw-430i-2018.jpg',
    specifications: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$43,300',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 248 hp @ 5200 rpm, Torque: 295 lb-ft @ 1450 rpm',
      transmission: ' 8-speed automatic with manual shifting mode (6-speed manual optional)',
      zeroToSixty: '5.5 secs',
      dimensions: '183″ L x 72″ W x 54.2″ H',
      curbWeight: '3574 lbs',
      fuelEconomy: '23 city / 34 highway'
    }
  },
  {
    id: 3,
    year: 2018,
    make: 'Cadillac',
    model: 'ATS Coupe',
    imgSrc: 'images/cadillac-ats-coupe-2018.jpg',
    specifications: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$37,895',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 272 hp @ 5500 rpm, Torque: 295 lb-ft @ 3000 rpm',
      transmission: ' 8-speed automatic with manual shifting mode (6-speed manual optional)',
      zeroToSixty: '5.6 secs',
      dimensions: '184″ L x 73″ W x 55″ H',
      curbWeight: '3418 lbs',
      fuelEconomy: '22 city / 31 highway'
    }
  },
  {
    id: 4,
    year: 2017,
    make: 'Infiniti',
    model: 'Q60',
    imgSrc: 'images/infiniti-q60-2017.jpg',
    specifications: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$39,855',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 208 hp @ 5500 rpm, Torque: 258 lb-ft @ 1500 rpm',
      transmission: ' 7-speed automatic with manual shifting mode',
      zeroToSixty: '7.0 secs',
      dimensions: '184.4″ L x 72.8″ W x 54.9″ H',
      curbWeight: '3727 lbs',
      fuelEconomy: '22 city / 30 highway'
    }
  },
  {
    id: 5,
    year: 2017,
    make: 'Lexus',
    model: 'RC 200t',
    imgSrc: 'images/lexus-rc200t-2017.jpg',
    specifications: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$40,155',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 241 hp @ 5500 rpm, Torque: 258 lb-ft @ 3000 rpm',
      transmission: ' 7-speed automatic with manual shifting mode',
      zeroToSixty: '7.3 secs',
      dimensions: '184.8″ L x 72.8″ W x 54.9″ H',
      curbWeight: '3737 lbs',
      fuelEconomy: '22 city / 32 highway'
    }
  },
  {
    id: 6,
    year: 2018,
    make: 'Mercedez-Benz',
    model: 'C300 Coupe',
    imgSrc: 'images/mercedez-benz-c300-coupe-2018.jpg',
    specifications: {
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
  }
]

function renderCar(car) {
  /*
  <div class="col s3">
    <a class="icon-title" href="2018 Audi A5">2018 Audi A5</a>
    <img class="car-icon" src="images/audi-a5-2018.jpg" alt="2018 Audi A5"/>
  </div> */

  var $carPosition = document.createElement('div')
  $carPosition.setAttribute('class', 'col s3')

  var $car = document.createElement('div')
  $car.setAttribute('class', 'car-container')
  $car.setAttribute('id', car.id)

  var $carLink = document.createElement('a')
  $carLink.setAttribute('class', 'icon-title')
  $carLink.setAttribute('href', '')
  $carLink.textContent = car.year + ' ' + car.make + ' ' + car.model

  var $carImg = document.createElement('img')
  $carImg.setAttribute('class', 'car-icon')
  $carImg.setAttribute('src', car.imgSrc)
  $carImg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  $carPosition.appendChild($car)
  $car.appendChild($carLink)
  $car.appendChild($carImg)

  return $carPosition
}

var $carList = document.querySelector('.car-list')

function createCarLinks(cars) {
  for (var i = 0; i < cars.length; i++) {
    $carList.appendChild(renderCar(cars[i]))
  }
}

createCarLinks(cars)

var $specsList = document.querySelector('.car-specs-list')

function renderSpecificCar(car) {
  var $carSpecContainer = document.createElement('div')
  $carSpecContainer.setAttribute('data-number', car.id)

  var $carHeaderPos = document.createElement('div')
  $carHeaderPos.setAttribute('class', 'col s12')
  var $carHeader = document.createElement('h3')
  $carHeader.setAttribute('class', 'specs-header')
  $carHeader.textContent = car.year + ' ' + car.make + ' ' + car.model

  var $carImg = document.createElement('img')
  $carImg.setAttribute('class', 'col s5 specs-img')
  $carImg.setAttribute('src', car.imgSrc)
  $carImg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  function renderCarSpecs() {
    var $carSpecs = document.createElement('div')
    $carSpecs.setAttribute('class', 'col s6 push-s2 car-specs')

    var $firstSpecTitle = document.createElement('span')
    var $firstSpec = document.createTextNode(car.specifications.vehicleType)
    var $firstLineBreak = document.createElement('br')
    var $firstBold = document.createElement('strong')
    $firstBold.textContent = 'Vehicle Type: '
    $firstSpecTitle.appendChild($firstBold)
    $firstSpecTitle.appendChild($firstSpec)

    var $secondSpecTitle = document.createElement('span')
    var $secondSpec = document.createTextNode(car.specifications.msrp)
    var $secondLineBreak = document.createElement('br')
    var $secondBold = document.createElement('strong')
    $secondBold.textContent = 'MSRP: '
    $secondSpecTitle.appendChild($secondBold)
    $secondSpecTitle.appendChild($secondSpec)

    var $thirdSpecTitle = document.createElement('span')
    var $thirdSpec = document.createTextNode(car.specifications.engineType)
    var $thirdLineBreak = document.createElement('br')
    var $thirdBold = document.createElement('strong')
    $thirdBold.textContent = 'Engine Type: '
    $thirdSpecTitle.appendChild($thirdBold)
    $thirdSpecTitle.appendChild($thirdSpec)

    var $fourthSpecTitle = document.createElement('span')
    var $fourthSpec = document.createTextNode(car.specifications.displacement)
    var $fourthLineBreak = document.createElement('br')
    var $fourthBold = document.createElement('strong')
    $fourthBold.textContent = 'Engine Displacement: '
    $fourthSpecTitle.appendChild($fourthBold)
    $fourthSpecTitle.appendChild($fourthSpec)

    var $fifthSpecTitle = document.createElement('span')
    var $fifthSpec = document.createTextNode(car.specifications.transmission)
    var $fifthLineBreak = document.createElement('br')
    var $fifthBold = document.createElement('strong')
    $fifthBold.textContent = 'Transmission Type: '
    $fifthSpecTitle.appendChild($fifthBold)
    $fifthSpecTitle.appendChild($fifthSpec)

    var $sixthSpecTitle = document.createElement('span')
    var $sixthSpec = document.createTextNode(car.specifications.zeroToSixty)
    var $sixthLineBreak = document.createElement('br')
    var $sixthBold = document.createElement('strong')
    $sixthBold.textContent = '0 to 60mph: '
    $sixthSpecTitle.appendChild($sixthBold)
    $sixthSpecTitle.appendChild($sixthSpec)

    var $seventhSpecTitle = document.createElement('span')
    var $seventhSpec = document.createTextNode(car.specifications.dimensions)
    var $seventhLineBreak = document.createElement('br')
    var $seventhBold = document.createElement('strong')
    $seventhBold.textContent = 'Dimensions: '
    $seventhSpecTitle.appendChild($seventhBold)
    $seventhSpecTitle.appendChild($seventhSpec)

    var $eighthSpecTitle = document.createElement('span')
    var $eighthSpec = document.createTextNode(car.specifications.curbWeight)
    var $eighthLineBreak = document.createElement('br')
    var $eighthBold = document.createElement('strong')
    $eighthBold.textContent = 'Curb Weight: '
    $eighthSpecTitle.appendChild($eighthBold)
    $eighthSpecTitle.appendChild($eighthSpec)

    var $ninthSpecTitle = document.createElement('span')
    var $ninthSpec = document.createTextNode(car.specifications.fuelEconomy)
    var $ninthLineBreak = document.createElement('br')
    var $ninthBold = document.createElement('strong')
    $ninthBold.textContent = 'Fuel Economy: '
    $ninthSpecTitle.appendChild($ninthBold)
    $ninthSpecTitle.appendChild($ninthSpec)

    $carSpecs.appendChild($firstSpecTitle)
    $carSpecs.appendChild($firstLineBreak)

    $carSpecs.appendChild($secondSpecTitle)
    $carSpecs.appendChild($secondLineBreak)

    $carSpecs.appendChild($thirdSpecTitle)
    $carSpecs.appendChild($thirdLineBreak)

    $carSpecs.appendChild($fourthSpecTitle)
    $carSpecs.appendChild($fourthLineBreak)

    $carSpecs.appendChild($fifthSpecTitle)
    $carSpecs.appendChild($fifthLineBreak)

    $carSpecs.appendChild($sixthSpecTitle)
    $carSpecs.appendChild($sixthLineBreak)

    $carSpecs.appendChild($seventhSpecTitle)
    $carSpecs.appendChild($seventhLineBreak)

    $carSpecs.appendChild($eighthSpecTitle)
    $carSpecs.appendChild($eighthLineBreak)

    $carSpecs.appendChild($ninthSpecTitle)
    $carSpecs.appendChild($ninthLineBreak)

    return $carSpecs
  }

  var $buttonContainer = document.createElement('div')
  $buttonContainer.setAttribute('class', 'col s12 button-container')

  var $returnButton = document.createElement('button')
  $returnButton.setAttribute('class', 'col s4 pull-s4 spec-button')
  $returnButton.setAttribute('id', 'return-button')
  $returnButton.setAttribute('type', 'button')
  $returnButton.textContent = 'Return to All Cars'

  var $compareButton = document.createElement('button')
  $compareButton.setAttribute('class', 'col s4 push-s7 spec-button')
  $compareButton.setAttribute('id', 'compare-button')
  $compareButton.setAttribute('type', 'button')
  $compareButton.textContent = 'Add Car for Comparison'

  $carSpecContainer.appendChild($carHeaderPos)
  $carHeaderPos.appendChild($carHeader)
  $carSpecContainer.appendChild($carImg)
  $carSpecContainer.appendChild(renderCarSpecs(car))
  $carSpecContainer.appendChild($buttonContainer)
  $buttonContainer.appendChild($compareButton)
  $buttonContainer.appendChild($returnButton)

  return $carSpecContainer
}

function findCarById(id, carlist) {
  for (var i = 0; i < carlist.length; i++) {
    var car = carlist[i]
    if (id === car.id) {
      return car
    }
  }
}

$carList.addEventListener('click', function (event) {
  var $car = event.target.closest('.car-container')

  if ($car !== null) {
    var carId = parseInt($car.getAttribute('id'))
    var carInfo = findCarById(carId, cars)
    $specsList.innerHTML = ''
    $specsList.appendChild(renderSpecificCar(carInfo))
    $carList.classList.add('hidden')
    $specsList.classList.remove('hidden')
  }
})

$specsList.addEventListener('click', function (event) {
  var specButton = event.target.getAttribute('id')
  if (specButton === 'return-button') {
    $specsList.classList.add('hidden')
    $carList.classList.remove('hidden')
  }
  else if (specButton === 'compare-button') {
    $specsList.classList.add('hidden')
    $carList.classList.remove('hidden')
  }
})
