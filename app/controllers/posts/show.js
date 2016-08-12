import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');

      let vote = this.store.createRecord('vote', {
        post: model,
        accepted: true
      })

      vote.save().then(() => {
        this.store.peekRecord('post', model.id).get('votes').then((votes) => {
          console.log('got it');
        });
      });
    },
    votedown(model) {
      console.log('+--- votedown action in controller');

      let vote = this.store.createRecord('vote', {
        post: model,
        accepted: false
      })

      vote.save();
    }
  }
});
