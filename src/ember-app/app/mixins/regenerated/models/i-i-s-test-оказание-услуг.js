import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  услуга: DS.belongsTo('i-i-s-test-услуга', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-test-запись', { inverse: 'оказаниеУслуг', async: false })
});

export let ValidationRules = {
  услуга: {
    descriptionKey: 'models.i-i-s-test-оказание-услуг.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-test-оказание-услуг.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
