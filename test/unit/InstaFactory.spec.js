describe('InstaFactory', function() {
  beforeEach(module('instaApp'));

  var insta;

  beforeEach(inject(function(InstaFactory) {
    insta = new InstaFactory('New Insta');
  }));

  it('is incomplete by default', function(){
    expect(insta.completed).toBe(false);
  });

  it('can be marked as complete', function() {
    insta.complete();
    expect(insta.completed).toBe(true);
  });
});
