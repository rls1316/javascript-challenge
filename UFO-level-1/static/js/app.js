// Populate Table 

// from data.js
var tableData = sightings;
console.log(tableData);

// select the table and table body
var table = d3.select("table");
var tbody = d3.select("tbody");

// set values and append rows
tableData.forEach((dataRow) => {
    console.log(dataRow);
    tbody.html("");
    var row = tbody.append("tr");
    
// iterate thru keys and values
    Object.entries(dataRow).forEach(([value]) => {
        console.log(value);
    });

 // build table
tableData.forEach(dataRow => {
    trow = tbody.append("tr")
    tbody.append("td").text(dataRow.datetime);
    tbody.append("td").text(dataRow.city);
    tbody.append("td").text(dataRow.state);
    tbody.append("td").text(dataRow.country);
    tbody.append("td").text(dataRow.shape);
    tbody.append("td").text(dataRow.durationMinutes);
    tbody.append("td").text(dataRow.comments);
    })
});

// Filter table button

// select the button
var button = d3.select("#filter-btn");

// create event handlers for clicking the button or pressing the enter key
button.on("click", buttonClick);

// create function for when filter button is clicked
function buttonClick() {

    // prevent refresh
    d3.event.preventDefault();

    // select input element 
    var inputElement = d3.select("#datetime");

    // select value of input element
    var inputValue = inputElement.property("value");

    // print value to the console
    console.log(inputValue);

    // filter data from the date/time selected
    var filteredData = tableData.filter(dataRow => dataRow.datetime === inputValue);
 
    // print value to the console
    console.log(filteredData);

    //clear table
    tbody.html("")

    // build table
    filteredData.forEach(sightingrow => {
        trow = tbody.append("tr")
        tbody.append("td").text(sightingrow.datetime);
        tbody.append("td").text(sightingrow.city);
        tbody.append("td").text(sightingrow.state);
        tbody.append("td").text(sightingrow.country);
        tbody.append("td").text(sightingrow.shape);
        tbody.append("td").text(sightingrow.durationMinutes);
        tbody.append("td").text(sightingrow.comments);
    })
}