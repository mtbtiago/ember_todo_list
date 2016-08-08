import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTodo: function() {
      var date = this.get('date');
      var title = this.get('title');
      var body = this.get('body');
      // var completed = this.get('completed'); // field not present

      var newTodo = this.store.createRecord('todo', {
        title: title,
        body: body,
        // completed: completed, // field not present
        date: new Date(date)
      });

      newTodo.save();

      // clear for new record
      this.setProperties({
        title: '',
        body: '',
        date: '',
        completed: false
      });
    }
  }
});
