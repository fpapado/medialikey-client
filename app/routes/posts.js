import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: Ember.$.getJSON('/api/posts'),
      post2: Ember.$.getJSON('/api/posts/2'),
      commentsFor1: Ember.$.getJSON('/api/posts/1/comments'),
      commentsFor5: Ember.$.getJSON('/api/posts/5/comments')
    });
  }
});
