
let student = {
    name: "Chandan",
    age: 29,
    course:"JavaScript" 
};
for(let key in student) {
    console.log(key, ":", student[key]);
}