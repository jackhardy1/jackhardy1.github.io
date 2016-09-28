describe("app", function() {
  it("should say 'Hello World' on the page", function() {
    browser.get('/');
    expect($$("h1").first().getText()).toEqual("Jack Hardy");
  });

});
