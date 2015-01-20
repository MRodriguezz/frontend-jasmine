describe("First jasmine project", function() {
  it("should say hello jasmine", function() {

    expect(helloWorld()).toBe("hello world");
  });

  it("should write the title of the page", function(){
    expect(titleText).toBe("Jasmine project. Cognits!");
    expect(titleText).not.toBe("");
  });

  it("should include in the title jasmine", function(){
    expect(titleText).toMatch(/[jJ]asmine/);
  });

  it("should be able to add", function(){
    expect(suma(2, 2)).toBe(4);
    expect(suma(3, 6)).toBe(9);
    expect(suma(-50, 1000)).toBe(950);
    expect(suma("50", "400")).toBe(450);
    expect(suma("this is a string", 20)).toBe(null);
  });

});
