import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  voted: null,
  available: null,

  init() {
    // TODO: checking when setting, obj > array
    this._super(...arguments);
    this.set('voted', []);
    this.set('available', []);
    this.get('store').findAll('post').then( posts => {
      this.set('available', posts);
    });
  },

  vote(post) {
    console.log(this.get('voted'));
    console.log(this.get('available'));

    this.get('voted').pushObject(post);
    this.get('available').removeObject(post);

    console.log(this.get('voted'));
    console.log(this.get('available'));
  },

  get_random() {
    return 3;
  },

  empty() {
    this.get('voted').clear();
  }
});
