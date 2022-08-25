var product = [
  { name: "RCF", quantity: 21, speaker: "ART 001" },
  { name: "Yamaha", quantity: 27, speaker: "BEF 002" },
  { name: "Pionner", quantity: 25, speaker: "CDF 004" },
  { name: "Focal", quantity: 17, speaker: "ARG 005" },
  { name: "Tannoy", quantity: 18, speaker: "BFM 006" },
  { name: "JBL", quantity: 23, speaker: "IJK 007" },
  { name: "Audiophony", quantity: 22, speaker: "TDK 008" },
];

/* Display */
function display(i) {

    console.log(i);
    var html = document.getElementById('result').innerHTML;
    html = html + "<table class='table table-striped'>";
    html = html + "<thead class='thead-inverse'><tr>";
    html = html + "<th scope='col'>Name</th><th scope='col'>Quantities</th><th scope='col'>Type</th>";
    html = html + "</thead></tr>";
    html = html + "<tbody>";
        let nb = 0;

    product.forEach(function (product) {
        html = html + "<tr>";
        html = html + "<td>" + product.name + "</td><td>" + product.quantity + "</td><td>" + product.speaker + "</td>";
        html = html + "</tr>";
        nb++
    })
    html = html + "</tbody>";
    html = html + "</table>";
    html = html + "Display: " + nb;
    document.getElementById('result').innerHTML = html;
}

/* Sort by quantity */
function sortQuantity() {
    document.getElementById('result').innerHTML = " ";
    var intro = "Sorted by quantity / ASC order";
    product.sort(function (a, b) {
        return a.quantity - b.quantity;
    });
    display(intro);
}

/* Sort by name */
function sortName() {
    document.getElementById('result').innerHTML = " ";
    var intro = "Sorted by name / ASC order";
    product.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    display(intro);
}


