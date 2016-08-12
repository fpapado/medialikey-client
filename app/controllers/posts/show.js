import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');

      this.store.createRecord('vote', {
        post: model,
        accepted: true
      }).save();
    },
    votedown(model) {
      console.log('+--- votedown action in controller');

      this.store.createRecord('vote', {
        post: model,
        accepted: false
      }).save();
    }
  }
});
