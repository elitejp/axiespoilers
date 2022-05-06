const inputTag = document.getElementById("tagFilter");
const inputClass = document.getElementById("classes");
const inputParts = document.getElementById("parts");
const inputTypes = document.getElementById("type");
const inputCost = document.getElementById("cost");
const inputSort = document.getElementById("sortBy");

const containerCards = document.querySelector(".containerCards");

function createCards (cards) {
  const ul = containerCards.querySelector("ul");
  ul.innerHTML = '';
  
  cards.forEach(card => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");

    img.src = card.cardImage;
    img.alt = card.cardName;
    img.setAttribute("class", "axie-card");
    div.setAttribute("class", "box-text");
    p.setAttribute("class", "card-text");
    
    p.innerHTML = createSpanTag(card.cardText);
    li.appendChild(img);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);

  });
  containerCards.appendChild(ul);
}

function createSpanTag(dataText) {
  let pInnerHTML = '';
  let arrayText;
  let keysWords;
  if (dataText === null) {
    arrayText = '';
  } else {
    arrayText = keyWordsNormalize(dataText).split(/{[\w\s]+}/);
    keysWords = keyWordsNormalize(dataText).match(/{[\w\s]+}/g);
  }
  keysWords === null ? keysWords = 0 : "";
  for (let i=0; i<arrayText.length; i++) {
    pInnerHTML += arrayText[i];
    if (i < keysWords.length) {
      pInnerHTML += `<span class="${keysWords[i].replace(/{|}/g, '').toLowerCase()}">` 
      + keysWords[i].replace(/{|}/g, "") 
      + "</span>"
    }
  }
  return pInnerHTML;
}

function keyWordsNormalize(text) {
  let textNormalize = text.replace(/<|\[/g, '{');
  return textNormalize.replace(/>|\]/g, '}');
}

// console.log("Apply Weak for 4 turns".split(/{[\w]+}/));
// let test = "Apply Weak for 4 turns".match(/{[\w]+}/g);
// console.log(test);

// =========================== FILTRANDO CARDS ================================
function testFilter() {
// let objcards = axieCards();
// console.log("test");
// console.log(objcards);
let cardsfiltered =  cardsObj.filter((card) => card.partType === "back");
console.log(cardsfiltered);
cardsObjCreate(cardsfiltered);
}

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