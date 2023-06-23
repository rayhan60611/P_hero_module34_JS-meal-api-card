// get element function
function getElement(value) {
  return document.getElementById(value);
}
// funny things in search

const btnSearch = getElement("btn-search");
const inputSearch = getElement("input-search");

function getFoodName() {
  loadData(inputSearch.value);
}

//
function loadData(foodName = "chicken") {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.meals));
}
loadData();

function display(data) {
  const parentDiv = getElement("parent-div");
  parentDiv.innerHTML = "";
  data.forEach((element) => {
    // console.log(element.strMeal);
    // console.log(element.strMealThumb);
    const div = document.createElement("div");
    div.innerHTML = `  
    <div class="card mycard">
    <img src="${element.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${element.strMeal}</h5>
      <p class="card-text">
        This is acard with supporting text below as a natural
        lead-in to additional content.
      </p>
    </div>
  </div>`;

    parentDiv.appendChild(div);
  });
}
