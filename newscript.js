
    
    
function sortingByStreetName() {

    var selectElement = document.getElementById("sortOptions");
    var selectedValue = selectElement.value;
 var buildings = document.querySelectorAll('.building');
  
  if (selectedValue == "street") {

     // get all items as an array and call the sort method
  Array.from(buildings).sort(function(a, b) {
    // get the text content
    a = a.querySelector('.street').innerText.toLowerCase()
    b = b.querySelector('.street').innerText.toLowerCase()
    return (a > b) - (a < b)
  }).forEach(function(n, i) {
    n.style.order = i
 })
  }

  else if (selectedValue == "architect"){
    Array.from(buildings).sort(function(a, b) {
        // get the text content
        a = a.querySelector('.architect').innerText.toLowerCase()
        b = b.querySelector('.architect').innerText.toLowerCase()
        return (a > b) - (a < b)
      }).forEach(function(n, i) {
        n.style.order = i
     })
  }
else if(selectedValue == "year"){
    Array.from(buildings).sort(function(a, b) {
        // using ~~ to cast the value to a number instead of a string
        a = ~~a.querySelector('.year').innerText
        b = ~~b.querySelector('.year').innerText
        return a - b
      }).forEach(function(n, i) {
        n.style.order = i
      })
}
 

}

