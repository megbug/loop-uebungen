console.log("it works");

// lvl_2_1

const imageArray = () => {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {

        if (i < 10) {
            returnArray.push("image_00" + i + ".jpeg");
        } 
        else if (i >= 10 && i < 100) {
            returnArray.push("image_0" + i + ".jpeg");
        } 
        else
        returnArray.push("image_" + i + ".jpeg");
    }

    console.log(returnArray);
};

imageArray();


// lvl_2_2

function loopMe() {
    
    let inputNum = document.getElementById('inputfeld').valueAsNumber;
    let anzahlO = [];
    

    for (let elt = 0; elt < inputNum; elt++) {
        anzahlO.push("o");
    }

    let anzahlOString = anzahlO.toString().replaceAll(",", "");

    document.getElementById('p').innerHTML = "L" + anzahlOString + "p";
}

// function loopMe2() {
    
//     let inputNum = document.getElementById('inputfeld').valueAsNumber;
    
//     let res ="L";

//     for (let elt = 0; elt < inputNum; elt++) {
//         res += "o";
//     }
//     res += "p";

//     document.getElementById('p').innerHTML = res
// }


