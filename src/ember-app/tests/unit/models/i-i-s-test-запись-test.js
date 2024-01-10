import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-запись', 'Unit | Model | i-i-s-test-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-запись',
    'model:i-i-s-test-клиент',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
