// 1. FELADAT - ÖSSZEADÁS
function add(a, b) {
  return a + b;
}
// Automatikus teszt a konzolban:
console.log("1. Feladat (3 + 4):", add(3, 4)); // 7

function runAdd() {
  let res = add(3, 4);
  document.getElementById("addResult").innerText = "Eredmény: " + res;
  console.log("Kattintásra: add(3, 4) =", res);
}

// 2. PÁROS VAGY PÁRATLAN?
function isEven(num) {
  return num % 2 === 0;
}
// Automatikus teszt a konzolban:
console.log("2. Feladat (isEven(4)):", isEven(4)); // true
console.log("2. Feladat (isEven(5)):", isEven(5)); // false

// Felülethez tartozó gombkezelő:
function runIsEven() {
  let val4 = isEven(4);
  let val5 = isEven(5);
  document.getElementById("isEvenResult").innerText = 
    "4 páros: " + val4 + " | 5 páros: " + val5;
  console.log("Kattintásra: isEven(4) =", val4, "| isEven(5) =", val5);
}

// 3. FELADAT - SZÁMLÁLÓ
let count = 0;
function incrementCounter() {
  count++;
  const counterEl = document.getElementById("counter");
  if (counterEl) counterEl.innerText = count;
  console.log("3. Feladat - Számláló értéke:", count);
}

// 4. FELADAT - NÉV BEKÉRÉSE
function askName() {
  let name = prompt("Mi a neved?");
  const nameEl = document.getElementById("name");
  if (nameEl && name) {
    nameEl.innerText = "Üdvözöllek, " + name + "!";
    console.log("4. Feladat - Megadott név:", name);
  }
}

// 5. FELADAT - VISSZASZÁMLÁLÓ
function startCountdown() {
  let timeLeft = 10;
  const countdownEl = document.getElementById("countdown");
  let timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (countdownEl) countdownEl.innerText = "Idő lejárt!";
      console.log("5. Feladat - Visszaszámláló: Idő lejárt!");
    } else {
      if (countdownEl) countdownEl.innerText = timeLeft;
      console.log("5. Feladat - Hátralévő idő:", timeLeft);
    }
    timeLeft--;
  }, 1000);
}

// 7. FELADAT - TÖMB SZORZÁSA
function multiplyArray(arr, multiplier) {
  return arr.map(num => num * multiplier);
}
let numbers = [1, 2, 3, 4];
console.log("7. Feladat - Szorzás 2-vel:", multiplyArray(numbers, 2)); // [2, 4, 6, 8]

// 9. FELADAT - HÁTTÉRSZÍN VÁLTOZTATÁS
function changeBg() {
  document.body.style.backgroundColor = "lightcoral";
  console.log("9. Feladat - Háttérszín átállítva 'lightcoral' színre.");
}

function resetBg() {
  document.body.style.backgroundColor = "";
  console.log("9. Feladat - Háttérszín visszaállítva alapértelmezett.");
}

// 6., 8., 10. FELADATOK - DOM manipuláció és időzítés
window.onload = function() {
  // 6. Tömb és lista
  let fruits = ["Alma", "Banán", "Narancs"];
  const fruitList = document.getElementById("fruitList");
  if (fruitList) {
    fruits.forEach(function(fruit) {
      fruitList.innerHTML += "<li>" + fruit + "</li>";
    });
    console.log("6. Feladat - Gyümölcsök tömb elemei betöltve:", fruits);
  }

  // 8. Objektum tulajdonságok megjelenítése
  let person = { name: "John", age: 30, city: "Budapest" };
  const personInfo = document.getElementById("personInfo");
  if (personInfo) {
    for (let key in person) {
      personInfo.innerHTML += "<li>" + key + ": " + person[key] + "</li>";
    }
    console.log("8. Feladat - Személy objektum adatai:", person);
  }

  // 10. Időzítő üdvözlő üzenet (5 másodperc múlva)
  setTimeout(function() {
    alert("Üdvözöllek az oldalon!");
    console.log("10. Feladat - Üdvözlő üzenet megjelent (1 mp után).");
  }, 1000);
};