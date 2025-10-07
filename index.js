//document.body.innerHTML += 10 + 5; //zeptat je chatu GPT proč a co znamená  document.body.innerHTML
//document.body.innerHTML += 10 % 3; // operátor modulo -> vrací zbytek po dělení

//document.body.innerHTML += "text 'text v uvozovkách'" //pokud chci mít v textu uvozovky, tak použít jenoduché

//document.body.innerHTML += "jedna" + " " + "dva"


//document.body.innerHTML += Math.round(3.569) //Math.round - funkce na zaokrouhlení
//document.body.innerHTML += Math.floor(0.98765) // zauokroulí dolu


//document.body.innerHTML += Math.ceil(6.4965321) // zaokrouhlí nahoru

//document.body.innerHTML += Math.random() // vždy vyhodí náhodné číslo mezi 0 a 1

// ÚKOL Č.1

/*
Založte si novou prázdnou stránku s JavaScriptovým programem.
V programu spočítejte svůj měsíční příjem, víte-li, že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
Měsíční příjem vypište do stránky.
Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
Daň také vypište do stránky
*/
/*let pracovni_doba = 7
let mzda = 320
let pracovni_dny = 21

let prijem = pracovni_doba * mzda * pracovni_dny

console.log(prijem)


// ŘEŠENÍ
/* document.body.innerHTML += '<p>';
document.body.innerHTML += (7 * 320 * 21) + ' Kč je můj měsíční příjem.';
document.body.innerHTML += '<br />';
document.body.innerHTML += 'Daň, kterou zaplatím je ' + Math.floor((7 * 320 * 21 * 0.4) * 0.15) + ' Kč.';
document.body.innerHTML += '</p>';
*/

/*
document.body.innerHTML += '<p>'
document.body.innerHTML += 'Můj měsíční příjem'

document.body.innerHTML += '</p>'
*/

// ÚKOL Č.2

/*
V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách.

Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.
Obě hodnoty vypište do stránky.
*/
//document.body.innerHTML += '<p>'

//document.body.innerHTML += (180/60) + " " + "hodiny" + " " + "a" + " " + "43" + " " + "minut"
//document.body.innerHTML += '<p>'

//document.body.innerHTML += '<p>'
//document.body.innerHTML += (Math.floor (223/60)) + " hodiny" + " " + (223 % 60) + " minut"
//document.body.innerHTML += '<p>'

// ÚKOL Č.3

/*
Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
Celou e-mailovou adresu vypište do stránky.
*/

//PROMĚNNÉ

/* KONSTANTY*/

/*const exchangeRate = 24.58;
document.body.innerHTML += "10 EUR " + exchangeRate * 10;
document.body.innerHTML += "<br>";

let myAge = 24
document.body.innerHTML += "Můj věk: " + myAge
*/

/*const wageInEur = 20
let exchangeRate = 24.55

let wageInCZK = wageInEur * exchangeRate
console.log(wageInCZK)

document.body.innerHTML += '<p>'
document.body.innerHTML += wageInEur * exchangeRate
document.body.innerHTML += '<p>'

// Proměnné Úkol č.2: Převod měny

const wageInEur = 10
const exchangeRateEurCzk = 24.340

let wageInCzk = wageInEur * exchangeRateEurCzk

console.log(wageInCzk)

document.body.innerHTML += '<p>';
document.body.innerHTML += 'Můj plat je ' + Math.round(wageInCzk) + ' Kč/hod.';
document.body.innerHTML += '</p>';
*/
/*
let start = 15 //start závodu v h
let delka = 20   // delka h běžce
let konec = (start + delka % 24)

console.log(konec)
*/

// ÚKOL Č.1
let pocet_hodin = 7
let mzda = 320
let pocet_dni = 21

document.body.innerHTML += pocet_hodin * mzda * pocet_dni
document.body.innerHTML += '<br>'

let prijem = pocet_hodin * mzda * pocet_dni + " je můj měsíční příjem."
document.body.innerHTML += prijem

document.body.innerHTML += '<br>'
document.body.innerHTML += Math.floor(pocet_hodin * mzda * pocet_dni * (1 - 0.6) * 0.15)
document.body.innerHTML += '<br>'

// ÚKOL Č.2
document.body.innerHTML += '<br>'
document.body.innerHTML += Math.floor(223/60) + " hodiny " + (223 % 60) + " minut"
document.body.innerHTML += '<br>'

// ÚKOL Č.3
document.body.innerHTML += '<br>'
document.body.innerHTML += "ivana" + "." + "antonova" + "@seznam.cz" 
document.body.innerHTML += '<br>'

// ÚKOL Č.4
document.body.innerHTML += Math.random()
document.body.innerHTML += "<br>"

// ÚKOL Č.5
const wage_in_eur = 20;
const exchange = 24.55;
const wage_in_czk = Math.round(wage_in_eur * exchange)

document.body.innerHTML += "<h1>Mzda v korunách: " + wage_in_czk + " Kč</h1>";

// ÚKOL Č.6
const start = 15
let delka = 10
delka +=5
const konec = (start + delka) % 24
document.body.innerHTML += "Čas konce v hodinách: " + konec

document.body.innerHTML += "<br>"

// ÚKOL NA DOMA Č.1

document.body.innerHTML += "<br>"
const listek_dospeli = 12
const navstevnost_celkem = 174
const pocet_predstaveni = 15
const mesicni_prijem = listek_dospeli *navstevnost_celkem * pocet_predstaveni

document.body.innerHTML += mesicni_prijem + " měsíční příjem divadla v eurech"

document.body.innerHTML += "<br>"

// 1 MOŽNOST VÝPOČTU
const listek_studenti = listek_dospeli * 0.65
const navstevnost_studenti = navstevnost_celkem * 0.40
const navstevnost_dospeli = navstevnost_celkem - navstevnost_studenti

document.body.innerHTML += pocet_predstaveni * ((listek_studenti * navstevnost_studenti) + (listek_dospeli * navstevnost_dospeli)) + " příjem divadla v eurech při započítání studentů a jejich slevy" 

document.body.innerHTML += "<br>"

// 2 MOŽNOST VÝPOČTU
const sleva_studenti = pocet_predstaveni * ((listek_dospeli * 0.35) * (navstevnost_celkem * 0.40))

document.body.innerHTML += mesicni_prijem - sleva_studenti + " příjem divadla v eurech při započítání studentů a jejich slevy"

document.body.innerHTML += "<br>"

// ÚKOL NA DOMA Č.2

document.body.innerHTML += "<br>"
const x = 47893.38759

document.body.innerHTML += "<br>"
document.body.innerHTML += x.toFixed(2) // není to number, ale string
document.body.innerHTML += "<br>"
document.body.innerHTML += x.toFixed(3) // není to number, ale string
document.body.innerHTML += "<br>"
document.body.innerHTML += Math.round(x)
document.body.innerHTML += "<br>"

// ÚKOL NA DOMA Č.3

document.body.innerHTML += "<br>"
let hod_kostkou = Math.floor(Math.random() * 6) +1 

document.body.innerHTML += hod_kostkou