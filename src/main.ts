const getRechnung = document.getElementById('rechnung') as HTMLInputElement;
const getPeople = document.getElementById('people') as HTMLInputElement;
const getCalculate = document.getElementById('calculate');
const getService = document.getElementById('service') as HTMLSelectElement;
const getWrapper = document.getElementById('pink_wrapper');
const createText = document.createElement('h3');

function newText(price:number, numOfGuest:number, quality: string) {
    createText.innerHTML = '';
    
    let tringeldCalc = 0;
    let pricePerPerson = 0;
    
    
    if (quality == 'Schlecht') {
        tringeldCalc = price / 100 * 2
        pricePerPerson = (price + tringeldCalc) / numOfGuest;
    } else if (quality == 'Mittel') {
        tringeldCalc = price / 100 * 10
        pricePerPerson = (price + tringeldCalc) / numOfGuest;
    } else if (quality == 'Super') {
        tringeldCalc = price / 100 * 20
        pricePerPerson = (price + tringeldCalc) / numOfGuest;
    } else {return 0}

    createText.innerText = `The price of the dinner for ${numOfGuest} people was ${price} Yen. 
    The trinkgeld is ${tringeldCalc.toFixed(2)} Yen.
    Each people should pay ${pricePerPerson.toFixed(2)} Yen.`;
    getWrapper?.appendChild(createText);
}

if(getCalculate) {
    getCalculate.addEventListener('click', (event:Event) => {
        event.preventDefault();
        let rechnung = 0;
        let people = 1;
        if (getRechnung.value) {
            rechnung = parseInt(getRechnung.value);
        }
        if(getPeople.value) {
            people = parseInt(getPeople.value);
        }
        
        const service = getService.value;
        newText(rechnung, people, service);
    });
}
