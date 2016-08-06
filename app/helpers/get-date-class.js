import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    var date = params[0].getTime();
    var now = new Date().getTime();
    var timeDiff = date - now;
    if (timeDiff < 0) {
      return 'danger';
    } else {
      return 'primary';
    }
  }
});
