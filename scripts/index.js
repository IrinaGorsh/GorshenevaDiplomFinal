 
  import  data from '/data/buildings.json' with { type: 'json' };
  console.log(data);

  const parent = document.querySelector(".latest");
console.log(parent);
const tags = document.querySelectorAll(".tag");
console.log(tags);

  

 for (let key in data) {
  let arr = data[key];
  console.log(arr);
   let buildings = arr.reduce((p,c) => { p[c.id] = c; return p; }, {});
   console.log(buildings);
   let lastBuildings = arr.slice(-6);
   console.log(lastBuildings);
   for(let key in lastBuildings) {

    
  
    const category = document.createElement("article");  
    category.classList.add("category"); 
   const BuildingInfo  = document.createElement("div");
    BuildingInfo.classList.add("building_info")
    const buildingImg = document.createElement("div"); 
   buildingImg.classList.add("building_img");
    const buildingData = document.createElement("div");
    buildingData.classList.add("building_data")
    //const buildingDescription = document.createElement("div");
    //buildingDescription.classList.add("building_text");
    
    const image = document.createElement("img");
    image.src = lastBuildings[key].image;
    const name = document.createElement("h3");
    name.classList.add("name");
    name.innerText = lastBuildings[key].name;
    const street = document.createElement("p");
    street.classList.add("street");
    street.innerText = lastBuildings[key].street.name;
    const style = document.createElement("p");
    style.classList.add("style");
    style.innerText = lastBuildings[key].style.name;
    const architect = document.createElement("p");
    architect.classList.add("architect");
    architect.innerText = lastBuildings[key].architect.name;
    const year = document.createElement("p");
    year.classList.add("year");
    year.innerText = lastBuildings[key].year;
    const buildingTxt = document.createElement("div");
    buildingTxt.classList.add("desc_link");
    const text = document.createElement("p");
    text.classList.add("description");
    text.innerText = lastBuildings[key].description;
    const readMore = document.createElement("a");
    readMore.classList.add("link");
    readMore.innerText="Подробнее..."
    readMore.href = lastBuildings[key].link;
  
    
    buildingImg.appendChild(image);
    
    buildingData.appendChild(name);
    buildingData.appendChild(street);
    buildingData.appendChild(style); 
  
    buildingData.appendChild(architect);
    buildingData.appendChild(year);
    
  
    buildingTxt.appendChild(text);
    buildingTxt.appendChild(readMore);
  
    
    
    BuildingInfo.appendChild(buildingData);
    BuildingInfo.appendChild(buildingImg);
    category.appendChild(BuildingInfo);
    category.appendChild(buildingTxt);
    parent.appendChild(category);
   }
  }
  

  







//const data = {
  //one: {
    //name: "Дом Березникова",
    //image: "images/28384_original.jpg",
    //street: "Пятницкого",
    //architect: "Неизвестнен",
    //year: 1911,
   // style: "модерн"
//},
    //two: { 

        //name: "Дом Штемпеля",

        //image: "images/28384_original.jpg",
        
        //street: "Театральная",
        
        //architect: "Медведев",
        
       // year: 1911,
        
        //style: "модерн"
      
    //}
  
   // }

    
  


//for (const key in data) {
  
  
 //const newdiv = document.createElement("div");
  //newdiv.classList.add("latest_added");  
  //const name = document.createElement("h1");
  //name.classList.add("name");
  //name.innerText = data[key].name;
  //newdiv.appendChild(name);
  //parent.appendChild(newdiv);
//}


