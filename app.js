let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// De Dollar a Yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}

// De Euro a Dollar
function fromEuroToDollar(euros) {
    let dollars = euros * oneEuroIs.USD;
    return dollars;
}

// De Yen a Pound
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(1))
console.log(fromYenToPound(1))

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}