console.log("it works");

// lvl_1_1

for (let i = 1; i <= 10; i++) {
    console.log("Hello World " + i);
}

// lvl_1_2

const arr = [];

for (let i = 0; i <= 10; i++) {
    arr.push(i)
}
console.log(arr);

// lvl_1_4

const names = ["Freddy", "Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

// lvl_1_6

const retArray = [];

for (let i = 1; i <= 100; i++) {
    retArray.push("image_" + i + ".jpeg")
};
console.log(retArray);

// lvl_1_7

let anzahl = 0;

do {
    anzahl ++;
    document.write("The number is " + anzahl + "<br>");
} while (anzahl <5);

// lvl_1_9

function wordPrint() {
    let inputNum = document.getElementById('inputfeld').value;

    let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

    words.forEach(elt => {
        if (inputNum == elt.length) {
            console.log(elt);
        }
    });
}





