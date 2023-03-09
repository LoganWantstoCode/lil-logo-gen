const inquirer = require("inquirer") 
const SVG = require("./lib/SVG.js") 
const {Circle, Triangle, Square} = require("./lib/Shapes.js")
const fs = require("fs")

inquirer.prompt([
    {
        type: "input", 
        name: "text",
        message: "Answer the text for the logo (must not be longer than 3 characters)" 
    },
    {
        type: "input",
        name: "color",
        message: "Enter a text color" 
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape",
        choices: ["Circle", "Triangle", "Square"] 
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the shape color"
    }


])
.then(answers => {
    let shape; 
    if (answers.shape === "Circle") {
        shape = new Circle() 
    } 
    else if (answers.shape === "Triangle") {
        shape = new Triangle()
    }
    else {
        shape = new Square() 
    }
shape.logoColor(answers.shapeColor) 
const svg = new SVG()
svg.logoText(answers.text, answers.color)
svg.logoShape(shape) 
return fs.writeFileSync ("./Logo.svg", svg.render())
})
.catch (err => {
    console.log(err.message)
})
