import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  voted: [],
  available: [],

  init() {
    this._super(...arguments);
    this.set('voted', []);
    this.set('available', []);

    console.log("Starting roulette init");

    this.get('store').findAll('post').then( posts => {
      // posts is type DS.RecordArray; must convert to JS array, id only
      let simple_posts = posts.map( item => {
        return item.get('id');
      });

      this.set('available', simple_posts);

      console.log("Init, available: " + this.get('available'));
      console.log("Init, voted: " + this.get('voted'));
    });
  },

  has_voted(id) {
    let pos = this.get('voted').indexOf(id);
    console.log("Has voted index: " + pos);

    if (pos === -1) {
      return false;
    }
    else {
      return true;
    }
  },

  vote(id) {
    console.log("Vote, id: " + id);
    if (!this.has_voted(id)) {
      this.get('voted').pushObject(id);
      this.get('available').removeObject(id);
    }
    else {
      console.warn("Already voted on this!");

      // If init happens after first vote, then that vote will be erroneously
      // placed in 'available'; this removes it just in case
      this.get('available').removeObject(id);
    }
    console.log("Vote post, available: " + this.get('available'));
    console.log("Vote post, voted: " + this.get('voted'));
  },

  get_random() {
    let next = this.get('available')[Math.floor(Math.random() * this.get('available').length)];
    console.log("Next: " + next);

    if (next && next !== 0){
      return next;
    }
    else {
      console.log("Voted on everything!");
      return -1;
    }
  },

  empty() {
    this.get('voted').clear();
    this.get('available').clear();
  }
});
