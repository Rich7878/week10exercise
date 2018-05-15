let ferrari = {
  make: 'ferrari',
  imgPath: 'img/ferrari.jpg',
  year: 2017,
  price: 200000,
  importFee() {
  return this.price * .1;
  }
}

let bugatti = {
  make: 'bugatti',
  imgPath: 'img/bugatti.jpg',
  year: 2018,
  price: 100000,
  importFee(){
  return this.price * .1;
  }
}

let mustang = {
  make: 'mustang',
  imgPath: 'img/orangemustang.jpg',
  year: 2016,
  price: 50000,
  importFee() {
  return this.price * .1;
  }
}

console.log(ferrari, bugatti, mustang);

function Car (make, imgPath, year, price) {
this.make = make;
this.imgPath = imgPath
this.year = year;
this.price = price;
this.importFee = function() {
  return this.price * 0.1;
  }
}
const carArray = [
ferrari = new Car('ferrari', 'img/ferrari.jpg', 2017,200000),
bugatti = new Car('bugatti', 'img/bugatti.jpg', 2018, 100000),
mustang = new Car('mustang', 'img/orangemustang.jpg', 2016, 50000),
]

for (let i=0; i <carArray.length; i++) {
  let newDiv = document.createElement('DIV')
  let newMake = document.createElement('H1')
  let newImg =document.createElement('IMG')
  let newPrice = document.createElement('P')
  let newYear = document.createElement('P')
  console.log(newDiv, newMake, newImg, newPrice, newYear)
  const newMakeText = document.createTextNode(carArray[i].make)
  const newPriceText = document.createTextNode(carArray[i].price)
  const newYearText = document.createTextNode(carArray[i].year)
  newMake.appendChild(newMakeText)
  newYear.appendChild(newYearText)
  newPrice.appendChild(newPriceText)
  newImg.src = carArray[i].imgPath
  newImg.alt = carArray[i].make
  newDiv.appendChild(newMake)
  newDiv.appendChild(newImg)
  newDiv.appendChild(newPrice)
  newDiv.appendChild(newYear)
  document.body.appendChild(newDiv)


}