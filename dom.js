// console.log(document.getElementById("foo"));

// document.getElementById("foo").
//     innerText = "Bar";

const div = document.
    getElementsByClassName("foo")

console.log(div);

for (let index = 0; index < div.length; index++) {
    const element = div[index];

    console.log(element);
}