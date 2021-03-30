let parent = document.querySelector(".slider__list");
let children = parent.children;
let index = 0;

let next = function () {
    parent.append(children[index]);
}

let prev = function () {
    parent.prepend(children[children.length - 1]);
}