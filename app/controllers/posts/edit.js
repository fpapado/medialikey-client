import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      this.transitionToRoute('posts.show', model);
    },
    cancel(model) {
      this.transitionToRoute('posts.show', model);
    }
  }
});
