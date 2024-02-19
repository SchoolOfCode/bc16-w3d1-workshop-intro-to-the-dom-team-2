console.log("hi")
document.getElementById(title);
   console.log(title);

document.getElementsByClassName("content");
console.log(document.getElementsByClassName("content"));


document.querySelectorAll("li");
console.log(document.querySelectorAll("li"));

document.querySelector(".highlight")
console.log(document.querySelector(".highlight"))

const elements = document.querySelectorAll(".highlight");

document.querySelectorAll(".highlight")
console.log(document.querySelectorAll(".highlight"))
for (var i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
}

document.getElementById("itemList");
console.log(document.getElementById("itemList"));

const itemList = document.getElementById("itemList");
itemList.querySelector("li");
console.log(itemList.querySelector("li"));

const item = itemList.querySelector("li");
console.log(item.parentNode);

console.log(itemList.childNodes);