const inputTag = document.getElementById("tagFilter");
const inputClass = document.getElementById("classes");
const inputParts = document.getElementById("parts");
const inputTypes = document.getElementById("type");
const inputCost = document.getElementById("cost");
const inputSort = document.getElementById("sortBy");

function filter() {
  const elements = document.getElementsByClassName("containerCards");
  let tag = inputTag.value.toLowerCase();
  let classes = inputClass.value.toLowerCase();
  let parts = inputParts.value.toLowerCase();
  let types = inputTypes.value.toLowerCase();
  let cost = inputCost.value.toLowerCase();
  let sortBy = inputSort.value.toLowerCase();

  let eClass = "";
  let eParts = "";
  let eTypes = "";
  let eCost = "";

  for (let i=0; i<elements.length; i++) {
    eClass = elements[i].dataset.class;
    eParts = elements[i].dataset.part;
    eTypes = elements[i].dataset.type;
    eCost = elements[i].dataset.cost;

    elements[i].classList.remove("hidden");
    elements[i].classList.add("hidden");

    if ((eClass == classes) && (eParts == parts) && 
    (eTypes == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && (eParts == parts) && 
    (eTypes == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && (eParts == parts) && 
    ("all" == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && ("all" == parts) && 
    (eTypes == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && (eParts == parts) && 
    (eTypes == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && ("all" == parts) && 
    (eTypes == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && (eParts == parts) && 
    ("all" == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && (eParts == parts) && 
    (eTypes == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && ("all" == parts) && 
    ("all" == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && ("all" == parts) && 
    (eTypes == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && (eParts == parts) && 
    ("all" == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && ("all" == parts) && 
    ("all" == types) && (eCost == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if ((eClass == classes) && ("all" == parts) && 
    ("all" == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && (eParts == parts) && 
    ("all" == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && ("all" == parts) && 
    (eTypes == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    } else if (("all" == classes) && ("all" == parts) && 
    ("all" == types) && ("all" == cost)) {
      console.log("test");
      elements[i].classList.remove("hidden");
    }
  }
}