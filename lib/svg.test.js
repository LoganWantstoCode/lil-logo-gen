const SVG = require ("./svg")
const { Square } = require("./shapes");

test ("Should render 300x200 SVG Element and append text element", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>`
    const newSVG = new SVG();
    newSVG.setText("A", "white")
    expect(newSVG.render()).toEqual(expectedSVG)
})
test("Should set text message and color", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#0000FF">B</text></svg>`
    const newSVG = new SVG();
    newSVG.setText("B", "#0000FF")
    expect(newSVG.render()).toEqual(expectedSVG)
})
test("Should throw error if text exceeds 3 char", () => {
    const expectedError = new Error ("Text must not exceed 3 char")
    const newSVG = new SVG();
    expect(()=> newSVG.setText("aslkf", "Green")).toThrow(expectedError);
})
test("Should render a shape", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">APL</text></svg>`
    const newSVG = new SVG();
    newSVG.setText("APL", "red")
    const square = new Square()
    square.logoColor("red")
    newSVG.logoShape(square)
    expect(newSVG.render()).toEqual(expectedSVG)  
})