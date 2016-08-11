import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');
    },
    votedown(model) {
      console.log('+--- votedown action in controller');
    }
  }
});
