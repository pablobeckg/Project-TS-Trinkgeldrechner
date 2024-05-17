var getRechnung = document.getElementById('rechnung');
var getPeople = document.getElementById('people');
var getCalculate = document.getElementById('calculate');
var getService = document.getElementById('service');
var getWrapper = document.getElementById('pink_wrapper');
var createText = document.createElement('h3');
function newText(price, numOfGuest, quality) {
    createText.innerHTML = '';
    var tringeldCalc = 0;
    var pricePerPerson = 0;
    if (quality == 'Schlecht') {
        tringeldCalc = price / 100 * 2;
        pricePerPerson = (price + tringeldCalc) / numOfGuest;
    }
    else if (quality == 'Mittel') {
        tringeldCalc = price / 100 * 10;
        pricePerPerson = (price + tringeldCalc) / numOfGuest;
    }
    else if (quality == 'Super') {
        tringeldCalc = price / 100 * 20;
        pricePerPerson = (price + tringeldCalc) / numOfGuest;
    }
    else {
        return 0;
    }
    createText.innerText = "The price of the dinner for ".concat(numOfGuest, " people was ").concat(price, " Yen. \n    The trinkgeld is ").concat(tringeldCalc.toFixed(2), " Yen.\n    Each people should pay ").concat(pricePerPerson.toFixed(2), " Yen.");
    getWrapper === null || getWrapper === void 0 ? void 0 : getWrapper.appendChild(createText);
}
if (getCalculate) {
    getCalculate.addEventListener('click', function () {
        var rechnung = 0;
        var people = 1;
        if (getRechnung.value) {
            rechnung = parseInt(getRechnung.value);
        }
        if (getPeople.value) {
            people = parseInt(getPeople.value);
        }
        var service = getService.value;
        newText(rechnung, people, service);
    });
}
