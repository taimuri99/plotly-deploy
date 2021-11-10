console.log(cityGrowths);

// sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// Slice the top five cities
var slicedCities = sortedCities.slice(0,7);
console.log(slicedCities)

// get names, growth
var topSevenCityNames = slicedCities.map(city => city.City);
var topSevenCityGrowths = slicedCities.map(city => parseInt(city.Increase_from_2016));
console.log([topSevenCityNames, topSevenCityGrowths])

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);