import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts/edit-form', 'Integration | Component | posts/edit form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts/edit-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts/edit-form}}
      template block text
    {{/posts/edit-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
