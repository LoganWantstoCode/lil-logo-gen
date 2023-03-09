const {Circle,Triangle,Square} = require("./Shapes");

describe("Circle", () => {
    it("should render a circle", () => {
      const circle = new Circle();
      const expectedLogo = `<circle cx="150" cy="100" r="80" fill="red"/>`;
      circle.logoColor('red')
      const actualLogo = circle.render();
      expect(actualLogo).toEqual(expectedLogo);
    });
  });


describe("Triangle", () => {
  it("should render a Triangle", () => {
    const triangle = new Triangle();
    const expectedLogo = `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`;
    triangle.logoColor('red')
    const actualLogo = triangle.render();
    expect(actualLogo).toEqual(expectedLogo);
  });
});


describe("Square", () => {
  it("should render a Square", () => {
    const square = new Square();
    const expectedLogo = `<rect x="90" y="40" width="120" height="120" fill="red"/>`;
    square.logoColor('red')
    const actualLogo = square.render();
    expect(actualLogo).toEqual(expectedLogo);
  });
});