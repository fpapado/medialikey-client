import Ember from 'ember';

export default Ember.Route.extend({
  roulette: Ember.inject.service(),

  init: function(){
    this.get('roulette');
  }
});
