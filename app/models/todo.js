import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('body'),
  date: DS.attr('date'),
  created_at: DS.attr('string', function() {
    return new Date();
  })
});
