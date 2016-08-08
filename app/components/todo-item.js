import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleCompleted: function(todo) {
      todo.set('completed', !todo.get('completed')); // locallly
      todo.save(); // remote db
    }
  }
});
