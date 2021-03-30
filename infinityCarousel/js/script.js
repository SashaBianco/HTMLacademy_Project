let parent = document.querySelector(".slider__list");
let children = parent.children;

let next = function () {
    let i = 0;
    parent.append(children[i],children[i+1],children[i+2],children[i+3],children[i+4]);
}

let prev = function () {
    let length = children.length;
    parent.prepend(children[length - 5],children[length - 4],children[length - 3],children[length - 2],children[length - 1]);
}
