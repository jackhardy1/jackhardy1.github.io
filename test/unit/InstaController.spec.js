describe('InstaController', function() {
  beforeEach(module('instaApp'));

  var ctrl;

  beforeEach(inject(function($controller,_InstaFactory_) {
    ctrl = $controller('InstaController');
    InstaFactory = _InstaFactory_;
  }));

  it('initialises with several instas', function() {
    var insta1 = new InstaFactory("Insta1", true);
    var insta2 = new InstaFactory("Insta2", false);
    expect(ctrl.instas).toEqual([insta1, insta2]);
  });

  it('adds a new insta', function() {
    ctrl.addInsta('NewInsta');
    var insta = new InstaFactory('NewInsta');
    expect(ctrl.instas.pop()).toEqual(insta);
  });

  it('removes the last insta', function() {
    var initialCount = ctrl.instas.length;
    ctrl.removeInsta();
    expect(ctrl.instas.length).toEqual(initialCount - 1);
  });

});
