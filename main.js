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
      displacement: 'Power: 248 hp @ 5200 rpm, Torque: 258 lb-ft @ 1450 rpm',
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

var carComparisonList = []

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

  var $carLink = document.createElement('span')
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

var $carListHeading = document.querySelector('h3')
var $carList = document.querySelector('.car-list')
var $specsList = document.querySelector('.car-specs-list')
var $compareList = document.querySelector('.car-compare-list')

function createCarLinks(cars) {
  for (var i = 0; i < cars.length; i++) {
    if (!carComparisonList.includes(cars[i])) {
      $carList.appendChild(renderCar(cars[i]))
    }
  }
}

createCarLinks(cars)

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
    $carListHeading.classList.add('hidden')
    $specsList.classList.remove('hidden')
  }
})

$specsList.addEventListener('click', function (event) {
  if (event.target.tagName !== 'BUTTON') {
    return
  }
  var specButton = event.target.getAttribute('id')
  if (specButton === 'return-button') {
    $carListHeading.classList.remove('hidden')
  }
  if (specButton === 'compare-button') {
    $carListHeading.classList.remove('hidden')
    $carListHeading.textContent = 'Please choose one more car for comparison'
    $carList.innerHTML = ''
    var carSpecId = parseInt($specsList.firstElementChild.getAttribute('data-number'))
    var car = findCarById(carSpecId, cars)
    if (carComparisonList.length < 2) {
      carComparisonList.push(car)
    }
    createCarLinks(cars)
  }
  $specsList.classList.add('hidden')
  $carList.classList.remove('hidden')
})

$specsList.addEventListener('click', function (event) {
  if (carComparisonList.length === 2) {
    $specsList.classList.add('hidden')
    $carList.classList.add('hidden')
    $compareList.classList.remove('hidden')
    $carListHeading.textContent = 'Car Comparison'
    renderCarComparePage(carComparisonList)
    renderCarCompareInfo(carComparisonList)
  }
})

function renderCarComparePage(car) {

  var $carImgOne = document.createElement('img')
  $carImgOne.setAttribute('class', 'compare-img')
  $carImgOne.setAttribute('src', car[0].imgSrc)
  $carImgOne.setAttribute('alt', car[0].year + ' ' + car[0].make + ' ' + car[0].model)

  var $carImgTwo = document.createElement('img')
  $carImgTwo.setAttribute('class', 'compare-img')
  $carImgTwo.setAttribute('src', car[1].imgSrc)
  $carImgTwo.setAttribute('alt', car[1].year + ' ' + car[1].make + ' ' + car[1].model)

  var $comparisonTable = document.createElement('table')
  $comparisonTable.setAttribute('class', 'tg')

  var $imgRow = document.createElement('tr')

  var $img1x1 = document.createElement('th')
  $img1x1.setAttribute('class', 'tg')

  var $img1x2 = document.createElement('td')
  $img1x2.setAttribute('class', 'tg compare-img-container')
  $img1x2.appendChild($carImgOne)

  var $img1x3 = document.createElement('td')
  $img1x3.setAttribute('class', 'tg compare-img-container')
  $img1x3.appendChild($carImgTwo)

  $imgRow.appendChild($img1x1)
  $imgRow.appendChild($img1x2)
  $imgRow.appendChild($img1x3)

  var $firstRow = document.createElement('tr')

  var $1x1 = document.createElement('th')
  $1x1.setAttribute('class', 'tg')
  $1x1.textContent = 'Year/Make/Model'

  var $1x2 = document.createElement('td')
  $1x2.setAttribute('class', 'tg first-car-name')

  var $1x3 = document.createElement('td')
  $1x3.setAttribute('class', 'tg second-car-name')

  $firstRow.appendChild($1x1)
  $firstRow.appendChild($1x2)
  $firstRow.appendChild($1x3)

  var $secondRow = document.createElement('tr')

  var $2x1 = document.createElement('th')
  $2x1.setAttribute('class', 'tg')
  $2x1.textContent = 'Vehicle Type'

  var $2x2 = document.createElement('td')
  $2x2.setAttribute('class', 'tg first-car-type')

  var $2x3 = document.createElement('td')
  $2x3.setAttribute('class', 'tg second-car-type')

  $secondRow.appendChild($2x1)
  $secondRow.appendChild($2x2)
  $secondRow.appendChild($2x3)

  var $thirdRow = document.createElement('tr')

  var $3x1 = document.createElement('th')
  $3x1.setAttribute('class', 'tg')
  $3x1.textContent = 'MSRP'

  var $3x2 = document.createElement('td')
  $3x2.setAttribute('class', 'tg first-car-msrp')

  var $3x3 = document.createElement('td')
  $3x3.setAttribute('class', 'tg second-car-msrp')

  $thirdRow.appendChild($3x1)
  $thirdRow.appendChild($3x2)
  $thirdRow.appendChild($3x3)

  var $fourthRow = document.createElement('tr')

  var $4x1 = document.createElement('th')
  $4x1.setAttribute('class', 'tg')
  $4x1.textContent = 'Engine Type'

  var $4x2 = document.createElement('td')
  $4x2.setAttribute('class', 'tg first-car-engine')

  var $4x3 = document.createElement('td')
  $4x3.setAttribute('class', 'tg second-car-engine')

  $fourthRow.appendChild($4x1)
  $fourthRow.appendChild($4x2)
  $fourthRow.appendChild($4x3)

  var $fifthRow = document.createElement('tr')

  var $5x1 = document.createElement('th')
  $5x1.setAttribute('class', 'tg')
  $5x1.textContent = 'Engine Displacement'

  var $5x2 = document.createElement('td')
  $5x2.setAttribute('class', 'tg first-car-displacement')

  var $5x3 = document.createElement('td')
  $5x3.setAttribute('class', 'tg second-car-displacement')

  $fifthRow.appendChild($5x1)
  $fifthRow.appendChild($5x2)
  $fifthRow.appendChild($5x3)

  var $sixthRow = document.createElement('tr')

  var $6x1 = document.createElement('th')
  $6x1.setAttribute('class', 'tg')
  $6x1.textContent = 'Transmission Type'

  var $6x2 = document.createElement('td')
  $6x2.setAttribute('class', 'tg first-car-trans')

  var $6x3 = document.createElement('td')
  $6x3.setAttribute('class', 'tg second-car-trans')

  $sixthRow.appendChild($6x1)
  $sixthRow.appendChild($6x2)
  $sixthRow.appendChild($6x3)

  var $seventhRow = document.createElement('tr')

  var $7x1 = document.createElement('th')
  $7x1.setAttribute('class', 'tg')
  $7x1.textContent = '0 to 60mph'

  var $7x2 = document.createElement('td')
  $7x2.setAttribute('class', 'tg first-car-060')

  var $7x3 = document.createElement('td')
  $7x3.setAttribute('class', 'tg second-car-060')

  $seventhRow.appendChild($7x1)
  $seventhRow.appendChild($7x2)
  $seventhRow.appendChild($7x3)

  var $eighthRow = document.createElement('tr')

  var $8x1 = document.createElement('th')
  $8x1.setAttribute('class', 'tg')
  $8x1.textContent = 'Dimensions'

  var $8x2 = document.createElement('td')
  $8x2.setAttribute('class', 'tg first-car-dim')

  var $8x3 = document.createElement('td')
  $8x3.setAttribute('class', 'tg second-car-dim')

  $eighthRow.appendChild($8x1)
  $eighthRow.appendChild($8x2)
  $eighthRow.appendChild($8x3)

  var $ninthRow = document.createElement('tr')

  var $9x1 = document.createElement('th')
  $9x1.setAttribute('class', 'tg')
  $9x1.textContent = 'Curb Weight'

  var $9x2 = document.createElement('td')
  $9x2.setAttribute('class', 'tg first-car-lbs')

  var $9x3 = document.createElement('td')
  $9x3.setAttribute('class', 'tg second-car-lbs')

  $ninthRow.appendChild($9x1)
  $ninthRow.appendChild($9x2)
  $ninthRow.appendChild($9x3)

  var $tenthRow = document.createElement('tr')

  var $10x1 = document.createElement('th')
  $10x1.setAttribute('class', 'tg')
  $10x1.textContent = 'Fuel Economy'

  var $10x2 = document.createElement('td')
  $10x2.setAttribute('class', 'tg first-car-fuelecon')

  var $10x3 = document.createElement('td')
  $10x3.setAttribute('class', 'tg second-car-fuelecon')

  $tenthRow.appendChild($10x1)
  $tenthRow.appendChild($10x2)
  $tenthRow.appendChild($10x3)

  $compareList.appendChild($comparisonTable)
  $comparisonTable.appendChild($imgRow)
  $comparisonTable.appendChild($firstRow)
  $comparisonTable.appendChild($secondRow)
  $comparisonTable.appendChild($thirdRow)
  $comparisonTable.appendChild($fourthRow)
  $comparisonTable.appendChild($fifthRow)
  $comparisonTable.appendChild($sixthRow)
  $comparisonTable.appendChild($seventhRow)
  $comparisonTable.appendChild($eighthRow)
  $comparisonTable.appendChild($ninthRow)
  $comparisonTable.appendChild($tenthRow)
}

function renderCarCompareInfo(car) {
  var $firstCarName = document.querySelector('.first-car-name')
  $firstCarName.textContent = car[0].year + ' ' + car[0].make + ' ' + car[0].model
  var $secondCarName = document.querySelector('.second-car-name')
  $secondCarName.textContent = car[1].year + ' ' + car[1].make + ' ' + car[1].model

  var $firstCarType = document.querySelector('.first-car-type')
  $firstCarType.textContent = car[0].specifications.vehicleType
  var $secondCarType = document.querySelector('.second-car-type')
  $secondCarType.textContent = car[1].specifications.vehicleType

  var $firstCarMsrp = document.querySelector('.first-car-msrp')
  $firstCarMsrp.textContent = car[0].specifications.msrp
  var $secondCarMsrp = document.querySelector('.second-car-msrp')
  $secondCarMsrp.textContent = car[1].specifications.msrp

  var $firstCarEngine = document.querySelector('.first-car-engine')
  $firstCarEngine.textContent = car[0].specifications.engineType
  var $secondCarEngine = document.querySelector('.second-car-engine')
  $secondCarEngine.textContent = car[1].specifications.engineType

  var $firstCarDisplacment = document.querySelector('.first-car-displacement')
  $firstCarDisplacment.textContent = car[0].specifications.displacement
  var $secondCarDisplacment = document.querySelector('.second-car-displacement')
  $secondCarDisplacment.textContent = car[1].specifications.displacement

  var $firstCarTrans = document.querySelector('.first-car-trans')
  $firstCarTrans.textContent = car[0].specifications.transmission
  var $secondCarTrans = document.querySelector('.second-car-trans')
  $secondCarTrans.textContent = car[1].specifications.transmission

  var $firstCar060 = document.querySelector('.first-car-060')
  $firstCar060.textContent = car[0].specifications.zeroToSixty
  var $secondCar060 = document.querySelector('.second-car-060')
  $secondCar060.textContent = car[1].specifications.zeroToSixty

  var $firstCarDim = document.querySelector('.first-car-dim')
  $firstCarDim.textContent = car[0].specifications.dimensions
  var $secondCarDim = document.querySelector('.second-car-dim')
  $secondCarDim.textContent = car[1].specifications.dimensions

  var $firstCarLbs = document.querySelector('.first-car-lbs')
  $firstCarLbs.textContent = car[0].specifications.curbWeight
  var $secondCarLbs = document.querySelector('.second-car-lbs')
  $secondCarLbs.textContent = car[1].specifications.curbWeight

  var $firstCarFuelEcon = document.querySelector('.first-car-fuelecon')
  $firstCarFuelEcon.textContent = car[0].specifications.fuelEconomy
  var $secondCarFuelEcon = document.querySelector('.second-car-fuelecon')
  $secondCarFuelEcon.textContent = car[1].specifications.fuelEconomy

  var $buttonContainer = document.createElement('div')
  $buttonContainer.setAttribute('class', 'col s12 button-container')

  var $returnButton = document.createElement('button')
  $returnButton.setAttribute('class', 'col s3 push-s5 spec-button')
  $returnButton.setAttribute('id', 'return-button-compare')
  $returnButton.setAttribute('type', 'button')
  $returnButton.textContent = 'Return to All Cars'

  $compareList.appendChild($returnButton)
}

$compareList.addEventListener('click', function (event) {
  if (event.target.tagName !== 'BUTTON') {
    return
  }
  var specButton = event.target.getAttribute('id')
  if (specButton === 'return-button-compare') {
    $compareList.classList.add('hidden')
    $compareList.innerHTML = ''
    carComparisonList = []
    $carListHeading.classList.remove('hidden')
    $carListHeading.textContent = 'All Cars'
    $carList.classList.remove('hidden')
    $carList.innerHTML = ''
  }
  createCarLinks(cars)
})
