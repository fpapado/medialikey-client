import Ember from 'ember';

export default Ember.Controller.extend({
  roulette: Ember.inject.service(),

  actions: {
    voteup(model) {
      // BUG: model passed form vote-buttons is just "model" string :/
      // this.get('model') fixes it, but breaks the component abstraction
      console.log('+--- voteup action in controller');
      console.log(model);

      let vote = this.store.createRecord('vote', {
        post: this.get('model'),
        accepted: true
      });

      vote.save().then(() => {
        console.log("Voted up!");
        this.get('roulette').vote(this.get('model').id);
        let next_id = this.get('roulette').get_random();

        this.transitionToRoute('posts.show', next_id);
      });

    },
    votedown(model) {
      console.log('+--- votedown action in controller');
      console.log(model);

      let vote = this.store.createRecord('vote', {
        post: this.get('model'),
        accepted: false
      });

      vote.save();
    }
  }
});
