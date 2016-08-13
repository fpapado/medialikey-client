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

      // Should first check, then save; good enough atm
      vote.save().then(() => {
        console.log("Voted up!");
        console.log(this.get('model').id);
        this.get('roulette').vote(this.get('model').id);
        let next_id = this.get('roulette').get_random();

        if (next_id && next_id > -1){
          this.transitionToRoute('posts.show', next_id);
        }
        else {
          this.transitionToRoute('posts.index');
        }
      });

    },
    votedown(model) {
      console.log('+--- votedown action in controller');
      console.log(model);

      let vote = this.store.createRecord('vote', {
        post: this.get('model'),
        accepted: false
      });

      vote.save().then(() => {
        console.log("Voted down!");
        console.log(this.get('model').id);
        this.get('roulette').vote(this.get('model').id);
        let next_id = this.get('roulette').get_random();

        if (next_id && next_id > -1){
          this.transitionToRoute('posts.show', next_id);
        }
        else {
          this.transitionToRoute('posts.index');
        }
      });
    }
  }
});
