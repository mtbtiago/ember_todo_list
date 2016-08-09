import Ember from 'ember';
/* globals $ */

export default Ember.Controller.extend({
  filter: '',
  filteredTodos: () => {
    var filter = this.get('filter');
    var regexp = new RegExp(filter, 'gi');
    var todos = this.model;

    return todos.filter((todo) => {
      return todo.get('title').match(regexp) || todo.get('body').match(regexp);
    });
  }.property('arrangedContent', 'filter'),
  sortedProperties: ['date:asc'],
  sortedTodos: Ember.computed.sort('model', 'sortedProperties'),
  actions: {
    clearSearch: () => {
      this.set('filter', '');
      $('#search').focus();
    }
  }
});
