console.log("This is javascript and it is working!");

let colors = ["orange", "blue", "green", "yellow"];
console.log(colors);

let age = 9;

if (age > 18) {
    console.log("you are an adult");
} else {
    console.log("you are a kido!");
}

for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}

let posts = [{
    title: "first post",
    likeCount: 12,
}, {
    title: "better post",
    likeCount: 222,
}];

// console.log(colors);

let myFunction = x => {
    console.log(x);
}

let greeter = name => {
    console.log("hello, " + name);
}
greeter("Zbyna");


colors.forEach(color => {
    console.log("This is my favorite color:" + color);
});

for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
}


    

console.log("This is the end of the code!");