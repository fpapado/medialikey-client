import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  source: DS.attr('string'),
  description: DS.attr('string'),
  credits: DS.attr('string'),
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number')
});
