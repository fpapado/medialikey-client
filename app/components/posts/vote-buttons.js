import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    voteup() {
      console.log('+- vote up action in component');

      this.voteup(this.get('model'));
    },
    votedown() {
      console.log('+- vote down action in component');

      this.votedown(this.get('model'));
    }
  }
});
