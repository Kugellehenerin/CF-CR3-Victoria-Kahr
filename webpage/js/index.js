var result = document.getElementById("result");

function calculateInsurance() {
    var yourName = document.getElementById("yname").value;
    var displayName = yourName[0].toUpperCase() + yourName.substring(1);
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var hpOfCar = document.getElementById("hpOfCar").value;
    var huf = 363.37;

    if (country == "Austria" && age >= 18) {
        var calcA = (Math.round(hpOfCar * 100 / (age)) + 50);
        result.innerHTML = "<br>" + displayName + ", our insurance rate offer will be " + calcA.toLocaleString() + " €";

    } else if (country == "Hungary" && age >= 18) {
        var calcH = ((Math.round(hpOfCar * 120 / (age) + 100)) * huf);
        result.innerHTML = "<br>" + displayName + ", our insurance rate offer will be " + calcH.toLocaleString() + " Ft";

    } else if (country == "Greece" && age >= 18) {
        var calcG = (Math.round(hpOfCar * 150 / (age + 3) + 50));
        result.innerHTML = "<br>" + displayName + ", our insurance rate offer will be " + calcG.toLocaleString() + " €";

    } else {
        result.innerHTML = `<br> We only offer insurance for individuals who are 18 or older!`
    }

}
document.getElementById("button").addEventListener("click", calculateInsurance, false);