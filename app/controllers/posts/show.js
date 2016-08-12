import Ember from 'ember';

export default Ember.Controller.extend({
  roulette: Ember.inject.service(),

  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');

      let vote = this.store.createRecord('vote', {
        post: model,
        accepted: true
      });

      vote.save().then(() => {
        console.log("Voted up!");
        this.get('roulette').vote(model.id);
        let next_id = this.get('roulette').get_random();

        this.transitionToRoute('posts.show', next_id);
      });

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
