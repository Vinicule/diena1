// iš anksto atsiprašau kad visi variables yra angliškai, tiesiog paskui savo šitą testą persikomentuosiu angliškai nes taip man lengviau suprasti ką darau :D
//sample text for changes
// 1.1 Sukurkite funkciją, kuri paverstų eurus į dolerius.
// Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį doleriais.
// Funkcija konvertuoti eurus į dolerius

async function convertEurToUsd(euros) {
    try {
        //gauname kursą iš API
        const response = await fetch(`https://v6.exchangerate-api.com/v6/7d5637a8beead8f1d4049ffb/latest/EUR`);
        const data = await response.json();
        //console.log(data); // Patikriname, ar API grąžino teisingus duomenis
        //Paimame USD kursą 
            const exchangeRate = data.conversion_rates.USD;
        
            if (!exchangeRate) {
                throw new Error('Nepavyko gauti USD kurso');
            }
            
            console.log(`Gautas EUR į USD kursas: ${exchangeRate}`);
            
            // Konvertuojame eurus į dolerius
            return euros * exchangeRate;
        } catch (error) {
            console.error('Klaida gaunant valiutos kursą:', error);
            // Jei API nepasiekiamas, grąžiname standartinį kursą
            return euros * 1.07;
        }
    }
    
// Generuojame atsitiktinį skaičių nuo 1 iki 1000
const randomEur = Math.floor(Math.random() * 1000) + 1;

// Testuojame funkciją
convertEurToUsd(randomEur)
    .then(usdAmount => {
        console.log(`Šios dienos kursas: ${randomEur} eurų yra ${usdAmount.toFixed(2)} dolerių.`);
    });


//--------------------------------------------------------------------------------
// 1.2 Sukurkite funkciją, kuri paverstų dolerius į eurus.
// Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį doleriais.
// Funkcija konvertuoti eurus į dolerius

async function convertUsdToEur(dollars) {
    try {
        //gauname kursą iš API
        const response = await fetch(`https://v6.exchangerate-api.com/v6/7d5637a8beead8f1d4049ffb/latest/USD`);
        const data = await response.json();
        //console.log(data); // Patikriname, ar API grąžino teisingus duomenis
        //Paimame EUR kursą 
            const exchangeRateUsd = data.conversion_rates.EUR;
            if (!exchangeRateUsd) {
                throw new Error('Nepavyko gauti EUR kurso');
            }
            
            console.log(`Gautas USD į EUR kursas: ${exchangeRateUsd}`);
            
            // Konvertuojame eurus į dolerius
            return dollars * exchangeRateUsd;
        } catch (error) {
            console.error('Klaida gaunant valiutos kursą:', error);
            // Jei API nepasiekiamas, grąžiname standartinį kursą
            return dollars * 0,9; // Pavyzdžiui, 1 EUR = 0,9 USD
        }
    }
    
// Generuojame atsitiktinį skaičių nuo 1 iki 1000
const randomUsd = Math.floor(Math.random() * 1000) + 1;

// Testuojame funkciją
convertUsdToEur(randomUsd)
    .then(usdAmount => {
        console.log(`Šios dienos kursas: ${randomUsd} dolerių yra ${usdAmount.toFixed(2)} eurų.`);
    });
    
//--------------------------------------------------------------------------------
// 1.3 Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index),
//  kai yra žinomas žmogaus ūgis ir svoris.
function calculateBMI(weight, heightCm) {
    //Konvertuojame ūgį iš metrų į centimetrus
    const heightM = heightCm /100; 
     // BMI formulė: svoris / (ūgis * ūgis) (ūgis turi būti metrais)
     const bmi = weight / (heightM * heightM);
    return bmi;
}

// Pavyzdiniai duomenys:
const weight = 77; // svoris kilogramais
const heightCm = 180; // ūgis centimetrais

// skaičiuojame BMI:
const bmi = calculateBMI(weight, heightCm);

//Apipavidaliname BMI rezultatą:
let bmiResult;
if (bmi < 18.5) {
    bmiResult = "Per mažas svoris";
}else if (bmi >= 18.5 && bmi < 24.9) {
    bmiResult = "Normalus svoris"; 
}else if (bmi >= 25 && bmi < 29.9) {
    bmiResult = "Per didelis svoris";
}else {
    bmiResult = "Nutukimas";
}

console.log(`Jūsų BMI yra: ${bmi.toFixed(2)} - tai yra ${bmiResult}`);

//--------------------------------------------------------------------------------
//1.4 Parašykite programą, kuri iš duoto žmogaus amžiaus metais
//pasakytų kiek tai yra sekundėmis, minutėmis, valandomis, dienomis.

function convertAgeToUnits(ageInYears) {
    // 365 dienos per metus + 1 diena kas ketvirtus metus
    const days = ageInYears * 365 + Math.floor(ageInYears / 4); 
    const hours = days * 24; // 24 valandos per dieną
    const minutes = hours * 60; // 60 minučių per valandą
    const seconds = minutes * 60; // 60 sekundžių per minutę

    return {
        years: ageInYears,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

//Pavyzdiniai duomenys:
const ageInYears = 30; // žmogaus amžius metais
const ageInUnits = convertAgeToUnits(ageInYears);

console.log(`${ageInYears} metų amžiaus žmogus išgyveno:
    - ${ageInUnits.days.toLocaleString()} dienų
    - ${ageInUnits.hours.toLocaleString()} valandų
    - ${ageInUnits.minutes.toLocaleString()} minučių
    - ${ageInUnits.seconds.toLocaleString()} sekundžių`);

//--------------------------------------------------------------------------------
// 1.5 Parašykite programą, kuri konvertuos termometro duomenis iš Farenheito
// į Celsijų, ir atvirkščiai.

function fahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // formulė Farenheitui į Celsijų
}

function celsiusToFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32; // formulė Celsijui į Farenheitą
}
// Pavyzdiniai duomenys:
const temperatureF = -40; // temperatūra Farenheite
const temperatureC = -40; // temperatūra Celsijuje
// Konvertuojame temperatūras ir spausdiname rezultatus:
const convertedToFahrenheit = celsiusToFahrenheit(temperatureC);
const convertedToCelsius = fahrenheitToCelsius(temperatureF);

console.log(`${temperatureF}°F = ${convertedToCelsius.toFixed(2)}°C`);
console.log(`${temperatureC}°C = ${convertedToFahrenheit.toFixed(2)}°F`);

//--------------------------------------------------------------------------------
//1.6 Sukurkite kodą, kuris išspausdins į konsolę 1-2-3-4-5-6-7-8-9-10 vienoje
//  eilutėje. Prieš vienetą ir po dešimties neturėtų būti brūkšniuko.

let line = '';
for (let i = 1; i <= 10; i++) {
    line += i;
    if (i < 10) {
        line += '-';
    }
}
console.log(line);

//--------------------------------------------------------------------------------
// 1.7 Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
/* 

*
* *
* * *
* * * *
* * * * *

*/

for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '* ';
    }
    console.log(star);
  }

//--------------------------------------------------------------------------------
// 1.8 Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

function daysTillChristmas() {
    const today = new Date();
    const years = today.getFullYear();
    
    // Nustatome Kalėdų datą (gruodžio 25 d.)
    let christmas = new Date(years, 11, 25); // 11 = gruodis (sausis yra 0)
    
    // Jei Kalėdos šiais metais jau praėjo, skaičiuojam kitų metų Kalėdas
    if (today > christmas) {
      christmas = new Date(years + 1, 11, 25);
    }
    
    // Skaičiuojame skirtumą milisekundėmis ir konvertuojame į dienas
    const diffMs = christmas - today;
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
    return days;
  }
  
  // Panaudojimas
  const daysLeft = daysTillChristmas();
  console.log(`Iki Kalėdų liko ${daysLeft} dienos(-ų)!`);
  
  // Papildoma informacija
  const today = new Date();
  console.log(`Šiandien: ${today.toLocaleDateString()}`);
  console.log(`Artimiausios Kalėdos: ${new Date(today.getFullYear(), 11, 25).toLocaleDateString()}`);


//--------------------------------------------------------------------------------
//1.9 Parašykite kodą, kuris apjungia masyvo duomenis į vieną
// tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
//Tomas,Dainius,Paulius,Jonas
//Tomas+Dainius+Paulius+Jonas

const names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];
//funkcija, kuri sujungia masyvą į tekstinę eilutę
function joinArray(arr) {
    return {
      withCommas: arr.join(','),
      withPluses: arr.join('+')
    };
  }
  
  const result = joinArray(['Tomas', 'Dainius', 'Paulius', 'Jonas']);
  console.log(result.withCommas); // Tomas,Dainius,Paulius,Jonas
  console.log(result.withPluses); // Tomas+Dainius+Paulius+Jonas

//--------------------------------------------------------------------------------
// 1.10 Parašykite kodą, kuris sugeneruos dvylikos simbolių
//slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
//mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
//simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
function generatePassword() {
    // Galimi simboliai kiekvienai kategorijai
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    // Funkcija atsitiktiniam simboliui pasirinkti iš eilutės
    const randomChar = (star) => star[Math.floor(Math.random() * star.length)];
  
    // Užtikriname bent po vieną simbolį iš kiekvienos kategorijos
    let password = [
      randomChar(lowerCase),
      randomChar(upperCase),
      randomChar(numbers),
      randomChar(specialChars)
    ];
  
    // Visi galimi simboliai kartu
    const allSymbols = lowerCase + upperCase + numbers + specialChars;
  
    // Papildome slaptažodį iki 12 simbolių atsitiktinai parinktais simboliais
    while (password.length < 12) {
      password.push(randomChar(allSymbols));
    }
  
    // Sumaišome simbolius, kad būtų atsitiktinė tvarka
    password = password
      .sort(() => Math.random() - 0.5)
      .join('');
  
    return password;
  }
  
  console.log(generatePassword());
