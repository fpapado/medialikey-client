import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'model.title',
    'model.source',
    'model.decscription',
    'model.credits',
    {
      get() {
        return !Ember.isEmpty(this.get('model.title')) &&
          !Ember.isEmpty(this.get('model.source')) &&
          !Ember.isEmpty(this.get('model.description')) &&
          !Ember.isEmpty(this.get('model.credits'));
      }
    }
  ),
  actions: {
    save() {
      console.log('+- save action in edit-form component');
      if (this.get('isValid')) {
        this.get('model').save().then((post) => {
          return this.save(post);
        }, (err) => {
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      }
      else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      console.log('+- cancel action in edit-form component');

      this.cancel(this.get('model'));
    }
  }
});
