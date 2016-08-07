import Ember from 'ember';
// inform JShint to ignore 'moment is not defined'
/* globals moment */

export default Ember.Helper.extend({
  compute(params) {
    return moment(params[0]).format('MM/DD/YYYY');
  }
});
