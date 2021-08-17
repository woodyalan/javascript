var button = document.querySelector(".btn");

var classes = button.classList;

classes.add("btn-danger");
classes.remove("btn-danger");

console.log(classes.contains("btn-danger"));
