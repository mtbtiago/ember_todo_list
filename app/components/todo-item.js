import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    markAsCompleted: function(todo) {
      todo.set('completed', true); // locallly
      todo.save(); // remote db
    }
  }
});
