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
let names = ["Zbyna", "Ondra", "Tom"];
let greeter = name => {
    console.log("hello, " + name);
}

names.forEach(name => {
    console.log("Hello, " + name);
})

colors.forEach(color => {
    console.log("This is my favorite color:" + color);
});

console.log("This is the end of the code!");