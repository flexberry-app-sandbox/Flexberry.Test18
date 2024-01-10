import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-запись', 'Unit | Serializer | i-i-s-test-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-запись',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test-t-тип-оплаты',
    'transform:i-i-s-test-тип-оплаты',

    'model:i-i-s-test-запись',
    'model:i-i-s-test-клиент',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
