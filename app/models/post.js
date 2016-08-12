import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  source: DS.attr('string'),
  description: DS.attr('string'),
  credits: DS.attr('string'),
  votes: DS.hasMany('vote', {async: true})
});
