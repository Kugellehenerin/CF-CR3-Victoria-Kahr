console.log(team);
var team = JSON.parse(team);
console.table(team);

for (i = 0; i < team.length; i++) {
    document.getElementById("result").innerHTML += `
        <p>${team[i].name}</p>
        <li> ${team[i].author}</li>
        <br>
        <div>
            <img src="${team[i].image}" width="250px">
        </div>
    <br> `
    console.log(team[i].image)
};