function motorRivals() {
  fetch('http://localhost:3000/cars')
    .then(res => res.json())
    .then(motors => {
      createCarLinks(motors)

      $carList.addEventListener('click', function (event) {
        const $car = event.target.closest('.car-container')
        if ($car !== null) {
          const carId = parseInt($car.getAttribute('id'))
          const carInfo = findCarById(carId, motors)
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
        const specButton = event.target.getAttribute('id')
        if (specButton === 'return-button') {
          $carListHeading.classList.remove('hidden')
        }
        if (specButton === 'compare-button') {
          $carListHeading.classList.remove('hidden')
          $carListHeading.textContent = 'Please choose one more car for comparison'
          $carList.innerHTML = ''
          const carSpecId = parseInt(
            $specsList.firstElementChild.getAttribute('data-number')
          )
          const car = findCarById(carSpecId, motors)
          if (carComparisonList.length < 2) {
            carComparisonList.push(car)
          }
          createCarLinks(motors)
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

      $compareList.addEventListener('click', function (event) {
        if (event.target.tagName !== 'BUTTON') {
          return
        }
        const specButton = event.target.getAttribute('id')
        if (specButton === 'return-button-compare') {
          $compareList.classList.add('hidden')
          $compareList.innerHTML = ''
          carComparisonList = []
          $carListHeading.classList.remove('hidden')
          $carListHeading.textContent = 'All Cars'
          $carList.classList.remove('hidden')
          $carList.innerHTML = ''
        }
        createCarLinks(motors)
      })

    })
}

motorRivals()

const $carListHeading = document.querySelector('h3')
const $carList = document.querySelector('.car-list')
const $specsList = document.querySelector('.car-specs-list')
const $compareList = document.querySelector('.car-compare-list')

let carComparisonList = []

function renderCar(car) {
  const $carPosition = document.createElement('div')
  $carPosition.setAttribute('class', 'col s3')

  const $car = document.createElement('div')
  $car.setAttribute('class', 'car-container')
  $car.setAttribute('id', car.id)

  const $carLink = document.createElement('span')
  $carLink.setAttribute('class', 'icon-title')
  $carLink.setAttribute('href', '')
  $carLink.textContent = car.year + ' ' + car.make + ' ' + car.model

  const $carImg = document.createElement('img')
  $carImg.setAttribute('class', 'car-icon')
  $carImg.setAttribute('src', car.imgSrc)
  $carImg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  $carPosition.appendChild($car)
  $car.appendChild($carLink)
  $car.appendChild($carImg)

  return $carPosition
}

function createCarLinks(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (!carComparisonList.includes(cars[i])) {
      $carList.appendChild(renderCar(cars[i]))
    }
  }
}

function renderSpecificCar(car) {
  const $carSpecContainer = document.createElement('div')
  $carSpecContainer.setAttribute('data-number', car.id)

  const $carHeaderPos = document.createElement('div')
  $carHeaderPos.setAttribute('class', 'col s12')
  const $carHeader = document.createElement('h3')
  $carHeader.setAttribute('class', 'specs-header')
  $carHeader.textContent = car.year + ' ' + car.make + ' ' + car.model

  const $carImg = document.createElement('img')
  $carImg.setAttribute('class', 'col s5 specs-img')
  $carImg.setAttribute('src', car.imgSrc)
  $carImg.setAttribute('alt', car.year + ' ' + car.make + ' ' + car.model)

  function renderCarSpecs() {
    const $carSpecs = document.createElement('div')
    $carSpecs.setAttribute('class', 'col s6 push-s2 car-specs')

    const $firstSpecTitle = document.createElement('span')
    const $firstSpec = document.createTextNode(car.specifications.vehicleType)
    const $firstLineBreak = document.createElement('br')
    const $firstBold = document.createElement('strong')
    $firstBold.textContent = 'Vehicle Type: '
    $firstSpecTitle.appendChild($firstBold)
    $firstSpecTitle.appendChild($firstSpec)

    const $secondSpecTitle = document.createElement('span')
    const $secondSpec = document.createTextNode(car.specifications.msrp)
    const $secondLineBreak = document.createElement('br')
    const $secondBold = document.createElement('strong')
    $secondBold.textContent = 'MSRP: '
    $secondSpecTitle.appendChild($secondBold)
    $secondSpecTitle.appendChild($secondSpec)

    const $thirdSpecTitle = document.createElement('span')
    const $thirdSpec = document.createTextNode(car.specifications.engineType)
    const $thirdLineBreak = document.createElement('br')
    const $thirdBold = document.createElement('strong')
    $thirdBold.textContent = 'Engine Type: '
    $thirdSpecTitle.appendChild($thirdBold)
    $thirdSpecTitle.appendChild($thirdSpec)

    const $fourthSpecTitle = document.createElement('span')
    const $fourthSpec = document.createTextNode(car.specifications.displacement)
    const $fourthLineBreak = document.createElement('br')
    const $fourthBold = document.createElement('strong')
    $fourthBold.textContent = 'Engine Displacement: '
    $fourthSpecTitle.appendChild($fourthBold)
    $fourthSpecTitle.appendChild($fourthSpec)

    const $fifthSpecTitle = document.createElement('span')
    const $fifthSpec = document.createTextNode(car.specifications.transmission)
    const $fifthLineBreak = document.createElement('br')
    const $fifthBold = document.createElement('strong')
    $fifthBold.textContent = 'Transmission Type: '
    $fifthSpecTitle.appendChild($fifthBold)
    $fifthSpecTitle.appendChild($fifthSpec)

    const $sixthSpecTitle = document.createElement('span')
    const $sixthSpec = document.createTextNode(car.specifications.zeroToSixty)
    const $sixthLineBreak = document.createElement('br')
    const $sixthBold = document.createElement('strong')
    $sixthBold.textContent = '0 to 60mph: '
    $sixthSpecTitle.appendChild($sixthBold)
    $sixthSpecTitle.appendChild($sixthSpec)

    const $seventhSpecTitle = document.createElement('span')
    const $seventhSpec = document.createTextNode(car.specifications.dimensions)
    const $seventhLineBreak = document.createElement('br')
    const $seventhBold = document.createElement('strong')
    $seventhBold.textContent = 'Dimensions: '
    $seventhSpecTitle.appendChild($seventhBold)
    $seventhSpecTitle.appendChild($seventhSpec)

    const $eighthSpecTitle = document.createElement('span')
    const $eighthSpec = document.createTextNode(car.specifications.curbWeight)
    const $eighthLineBreak = document.createElement('br')
    const $eighthBold = document.createElement('strong')
    $eighthBold.textContent = 'Curb Weight: '
    $eighthSpecTitle.appendChild($eighthBold)
    $eighthSpecTitle.appendChild($eighthSpec)

    const $ninthSpecTitle = document.createElement('span')
    const $ninthSpec = document.createTextNode(car.specifications.fuelEconomy)
    const $ninthLineBreak = document.createElement('br')
    const $ninthBold = document.createElement('strong')
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

  const $buttonContainer = document.createElement('div')
  $buttonContainer.setAttribute('class', 'col s12 button-container')

  const $returnButton = document.createElement('button')
  $returnButton.setAttribute('class', 'col s4 pull-s4 spec-button')
  $returnButton.setAttribute('id', 'return-button')
  $returnButton.setAttribute('type', 'button')
  $returnButton.textContent = 'Return to All Cars'

  const $compareButton = document.createElement('button')
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
  for (let i = 0; i < carlist.length; i++) {
    const car = carlist[i]
    if (id === car.id) {
      return car
    }
  }
}

function renderCarComparePage(car) {
  const $carImgOne = document.createElement('img')
  $carImgOne.setAttribute('class', 'compare-img')
  $carImgOne.setAttribute('src', car[0].imgSrc)
  $carImgOne.setAttribute(
    'alt',
    car[0].year + ' ' + car[0].make + ' ' + car[0].model
  )

  const $carImgTwo = document.createElement('img')
  $carImgTwo.setAttribute('class', 'compare-img')
  $carImgTwo.setAttribute('src', car[1].imgSrc)
  $carImgTwo.setAttribute(
    'alt',
    car[1].year + ' ' + car[1].make + ' ' + car[1].model
  )

  const $comparisonTable = document.createElement('table')
  $comparisonTable.setAttribute('class', 'tg')

  const $imgRow = document.createElement('tr')

  const $img1x1 = document.createElement('th')
  $img1x1.setAttribute('class', 'tg')

  const $img1x2 = document.createElement('td')
  $img1x2.setAttribute('class', 'tg compare-img-container')
  $img1x2.appendChild($carImgOne)

  const $img1x3 = document.createElement('td')
  $img1x3.setAttribute('class', 'tg compare-img-container')
  $img1x3.appendChild($carImgTwo)

  $imgRow.appendChild($img1x1)
  $imgRow.appendChild($img1x2)
  $imgRow.appendChild($img1x3)

  const $firstRow = document.createElement('tr')

  const $1x1 = document.createElement('th')
  $1x1.setAttribute('class', 'tg')
  $1x1.textContent = 'Year/Make/Model'

  const $1x2 = document.createElement('td')
  $1x2.setAttribute('class', 'tg first-car-name')

  const $1x3 = document.createElement('td')
  $1x3.setAttribute('class', 'tg second-car-name')

  $firstRow.appendChild($1x1)
  $firstRow.appendChild($1x2)
  $firstRow.appendChild($1x3)

  const $secondRow = document.createElement('tr')

  const $2x1 = document.createElement('th')
  $2x1.setAttribute('class', 'tg')
  $2x1.textContent = 'Vehicle Type'

  const $2x2 = document.createElement('td')
  $2x2.setAttribute('class', 'tg first-car-type')

  const $2x3 = document.createElement('td')
  $2x3.setAttribute('class', 'tg second-car-type')

  $secondRow.appendChild($2x1)
  $secondRow.appendChild($2x2)
  $secondRow.appendChild($2x3)

  const $thirdRow = document.createElement('tr')

  const $3x1 = document.createElement('th')
  $3x1.setAttribute('class', 'tg')
  $3x1.textContent = 'MSRP'

  const $3x2 = document.createElement('td')
  $3x2.setAttribute('class', 'tg first-car-msrp')

  const $3x3 = document.createElement('td')
  $3x3.setAttribute('class', 'tg second-car-msrp')

  $thirdRow.appendChild($3x1)
  $thirdRow.appendChild($3x2)
  $thirdRow.appendChild($3x3)

  const $fourthRow = document.createElement('tr')

  const $4x1 = document.createElement('th')
  $4x1.setAttribute('class', 'tg')
  $4x1.textContent = 'Engine Type'

  const $4x2 = document.createElement('td')
  $4x2.setAttribute('class', 'tg first-car-engine')

  const $4x3 = document.createElement('td')
  $4x3.setAttribute('class', 'tg second-car-engine')

  $fourthRow.appendChild($4x1)
  $fourthRow.appendChild($4x2)
  $fourthRow.appendChild($4x3)

  const $fifthRow = document.createElement('tr')

  const $5x1 = document.createElement('th')
  $5x1.setAttribute('class', 'tg')
  $5x1.textContent = 'Engine Displacement'

  const $5x2 = document.createElement('td')
  $5x2.setAttribute('class', 'tg first-car-displacement')

  const $5x3 = document.createElement('td')
  $5x3.setAttribute('class', 'tg second-car-displacement')

  $fifthRow.appendChild($5x1)
  $fifthRow.appendChild($5x2)
  $fifthRow.appendChild($5x3)

  const $sixthRow = document.createElement('tr')

  const $6x1 = document.createElement('th')
  $6x1.setAttribute('class', 'tg')
  $6x1.textContent = 'Transmission Type'

  const $6x2 = document.createElement('td')
  $6x2.setAttribute('class', 'tg first-car-trans')

  const $6x3 = document.createElement('td')
  $6x3.setAttribute('class', 'tg second-car-trans')

  $sixthRow.appendChild($6x1)
  $sixthRow.appendChild($6x2)
  $sixthRow.appendChild($6x3)

  const $seventhRow = document.createElement('tr')

  const $7x1 = document.createElement('th')
  $7x1.setAttribute('class', 'tg')
  $7x1.textContent = '0 to 60mph'

  const $7x2 = document.createElement('td')
  $7x2.setAttribute('class', 'tg first-car-060')

  const $7x3 = document.createElement('td')
  $7x3.setAttribute('class', 'tg second-car-060')

  $seventhRow.appendChild($7x1)
  $seventhRow.appendChild($7x2)
  $seventhRow.appendChild($7x3)

  const $eighthRow = document.createElement('tr')

  const $8x1 = document.createElement('th')
  $8x1.setAttribute('class', 'tg')
  $8x1.textContent = 'Dimensions'

  const $8x2 = document.createElement('td')
  $8x2.setAttribute('class', 'tg first-car-dim')

  const $8x3 = document.createElement('td')
  $8x3.setAttribute('class', 'tg second-car-dim')

  $eighthRow.appendChild($8x1)
  $eighthRow.appendChild($8x2)
  $eighthRow.appendChild($8x3)

  const $ninthRow = document.createElement('tr')

  const $9x1 = document.createElement('th')
  $9x1.setAttribute('class', 'tg')
  $9x1.textContent = 'Curb Weight'

  const $9x2 = document.createElement('td')
  $9x2.setAttribute('class', 'tg first-car-lbs')

  const $9x3 = document.createElement('td')
  $9x3.setAttribute('class', 'tg second-car-lbs')

  $ninthRow.appendChild($9x1)
  $ninthRow.appendChild($9x2)
  $ninthRow.appendChild($9x3)

  const $tenthRow = document.createElement('tr')

  const $10x1 = document.createElement('th')
  $10x1.setAttribute('class', 'tg')
  $10x1.textContent = 'Fuel Economy'

  const $10x2 = document.createElement('td')
  $10x2.setAttribute('class', 'tg first-car-fuelecon')

  const $10x3 = document.createElement('td')
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
  const $firstCarName = document.querySelector('.first-car-name')
  $firstCarName.textContent =
    car[0].year + ' ' + car[0].make + ' ' + car[0].model
  const $secondCarName = document.querySelector('.second-car-name')
  $secondCarName.textContent =
    car[1].year + ' ' + car[1].make + ' ' + car[1].model

  const $firstCarType = document.querySelector('.first-car-type')
  $firstCarType.textContent = car[0].specifications.vehicleType
  const $secondCarType = document.querySelector('.second-car-type')
  $secondCarType.textContent = car[1].specifications.vehicleType

  const $firstCarMsrp = document.querySelector('.first-car-msrp')
  $firstCarMsrp.textContent = car[0].specifications.msrp
  const $secondCarMsrp = document.querySelector('.second-car-msrp')
  $secondCarMsrp.textContent = car[1].specifications.msrp

  const $firstCarEngine = document.querySelector('.first-car-engine')
  $firstCarEngine.textContent = car[0].specifications.engineType
  const $secondCarEngine = document.querySelector('.second-car-engine')
  $secondCarEngine.textContent = car[1].specifications.engineType

  const $firstCarDisplacment = document.querySelector('.first-car-displacement')
  $firstCarDisplacment.textContent = car[0].specifications.displacement
  const $secondCarDisplacment = document.querySelector(
    '.second-car-displacement'
  )
  $secondCarDisplacment.textContent = car[1].specifications.displacement

  const $firstCarTrans = document.querySelector('.first-car-trans')
  $firstCarTrans.textContent = car[0].specifications.transmission
  const $secondCarTrans = document.querySelector('.second-car-trans')
  $secondCarTrans.textContent = car[1].specifications.transmission

  const $firstCar060 = document.querySelector('.first-car-060')
  $firstCar060.textContent = car[0].specifications.zeroToSixty
  const $secondCar060 = document.querySelector('.second-car-060')
  $secondCar060.textContent = car[1].specifications.zeroToSixty

  const $firstCarDim = document.querySelector('.first-car-dim')
  $firstCarDim.textContent = car[0].specifications.dimensions
  const $secondCarDim = document.querySelector('.second-car-dim')
  $secondCarDim.textContent = car[1].specifications.dimensions

  const $firstCarLbs = document.querySelector('.first-car-lbs')
  $firstCarLbs.textContent = car[0].specifications.curbWeight
  const $secondCarLbs = document.querySelector('.second-car-lbs')
  $secondCarLbs.textContent = car[1].specifications.curbWeight

  const $firstCarFuelEcon = document.querySelector('.first-car-fuelecon')
  $firstCarFuelEcon.textContent = car[0].specifications.fuelEconomy
  const $secondCarFuelEcon = document.querySelector('.second-car-fuelecon')
  $secondCarFuelEcon.textContent = car[1].specifications.fuelEconomy

  const $buttonContainer = document.createElement('div')
  $buttonContainer.setAttribute('class', 'col s12 button-container')

  const $returnButton = document.createElement('button')
  $returnButton.setAttribute('class', 'col s3 push-s5 spec-button')
  $returnButton.setAttribute('id', 'return-button-compare')
  $returnButton.setAttribute('type', 'button')
  $returnButton.textContent = 'Return to All Cars'

  $compareList.appendChild($returnButton)
}
