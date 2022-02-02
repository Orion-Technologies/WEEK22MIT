var Dragon = require("../dragon");

describe("exists?", () => {
  test("dragon should be a function", () => {
    const dragon = new Dragon();
    expect (dragon).toBeDefined();
  });
});

describe("attributes", () => {
  test("it should be red by default", () => {
    const dragon1 = new Dragon("Smaug", "Red");
    const color = dragon1.color;
    expect(color).toEqual("Red");
  });

  test("it can change color to golden", () => {
    const dragon1 = new Dragon();
    dragon1.color = "Golden";
  });
});

describe("sayings", () => {
  test("it should get angry when you wake it up", () => {
    const dragon1 = new Dragon();
    const wakeUp = dragon1.wakeUp();
    expect(wakeUp).toEqual(dragon1.wakeUp());
  });

  test("it should be happy when you leave", () => {
    const dragon1 = new Dragon();
    const threaten = dragon1.threaten();
    expect(threaten).toEqual(dragon1.threaten());
  });
});
