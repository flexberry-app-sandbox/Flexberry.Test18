import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  кодУслуги: DS.attr('number'),
  наименование: DS.attr('string'),
  запись: DS.belongsTo('i-i-s-test-запись', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  кодУслуги: {
    descriptionKey: 'models.i-i-s-test-услуга.validations.кодУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-test-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-test-услуга.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
