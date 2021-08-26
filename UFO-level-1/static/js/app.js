// from data.js -- populate table
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// create function to build table, set values and print from data
function buildTable(data) {
    tbody.html("");

    data.forEach((sighting) => {
        var row = tbody.append("tr");
    
    // iterate thru keys and values
    Object.entries(sighting).forEach(([key, value]) => console.log(key, value);
        var cell = row.append("td") cell.text(value)
    )});
}

// Filter table button


