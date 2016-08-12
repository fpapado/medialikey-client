import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');

      let vote = this.store.createRecord('vote', {
        post: model,
        accepted: true
      });

      vote.save();

    },
    votedown(model) {
      console.log('+--- votedown action in controller');

      let vote = this.store.createRecord('vote', {
        post: model,
        accepted: false
      });

      vote.save();
    }
  }
});
