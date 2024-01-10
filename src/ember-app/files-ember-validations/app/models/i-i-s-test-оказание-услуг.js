import {
  defineNamespace,
  Model as ОказаниеУслугMixin
} from '../mixins/regenerated/models/i-i-s-test-оказание-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказаниеУслугMixin, {
});

defineNamespace(Model);

export default Model;
