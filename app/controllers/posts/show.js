import Ember from 'ember';

export default Ember.Controller.extend({
  roulette: Ember.inject.service(),

  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');
      console.log(model);

      let vote = this.store.createRecord('vote', {
        post: model,
        accepted: true
      });

      // Should first check, then save; good enough atm
      vote.save().then(() => {
        console.log("Voted up!");
        console.log(model.id);
        this.get('roulette').vote(model.id);
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
        post: model,
        accepted: false
      });

      vote.save().then(() => {
        console.log("Voted down!");
        console.log(model.id);
        this.get('roulette').vote(model.id);
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
