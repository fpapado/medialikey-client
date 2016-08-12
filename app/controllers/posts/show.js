import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    voteup(model) {
      console.log('+--- voteup action in controller');

      return this.get('ajax').post('/api/votes', {
        data: {
          type: "votes",
          attributes: {
            id: 1
          }
        }
      });
    },
    votedown(model) {
      console.log('+--- votedown action in controller');
    }
  }
});
