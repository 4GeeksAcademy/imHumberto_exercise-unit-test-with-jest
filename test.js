test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 JPY (Japanese Yen)", function() {

    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;

    expect(fromDollarToYen(1)).toBe(expected);
})

test("100 yen should be the correct amount in British Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(100);
    const expected = (100 / 156.5) * 0.87;

    expect(fromYenToPound(100)).toBe(expected);
})
