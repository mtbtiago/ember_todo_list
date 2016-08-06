import Ember from 'ember';
// inform JShint to ignore 'moment is not defined'
/* globals moment */

export default Ember.Helper.extend({
  compute(params) {
    var date = params[0].getTime();
    var now = new Date().getTime();
    var timeDiff = Math.abs(now - date);
    // if more than two days, show date; else show time
    if (Math.ceil(timeDiff / (1000 * 3600 * 24)) > 2) {
      return moment(params[0]).format('DD/MM/YYYY');
    } else {
      return moment(params[0]).fromNow();
    }
  }
});
