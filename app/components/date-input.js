import Ember from 'ember';
/* globals moment */

export default Ember.TextField.extend({
  format: 'DD.MM.YYYY',
  date: function(key, date) {
    var format = this.get('format');
    if (date) {
      this.set('value', moment(date).format(format));
    } else {
      var value = this.get('value');
      if (value) {
        date = moment(value, format);
      } else {
        date = null;
      }
    }
    return date;
  }.property('value')
});
