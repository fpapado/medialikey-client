import DS from 'ember-data';

export default DS.Model.extend({
  accepted: DS.attr('boolean'),
  post: DS.belongsTo('post')
});
