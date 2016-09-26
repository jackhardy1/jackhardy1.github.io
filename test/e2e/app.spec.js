describe("app", function() {
  it("should say 'Hello World' on the page", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello World");
  });

  it("should say 'Hello world' on the page", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello World");
  });

  it('can add an insta', function() {
    browser.get('/');
    $('#new-insta-text').sendKeys("NewInsta");
    $('#add-insta').click();

    var insta = $$('#instas p').last().getText();
    expect(insta).toEqual('name: NewInsta unfinished');
  });

  it('can remove an insta', function() {
    browser.get('/');
    var instas = $$('#instas p');

    $('#remove-insta').click();

    expect(instas.count()).toEqual(1);
  });

});
