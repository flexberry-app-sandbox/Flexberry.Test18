import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tТипОплатыEnum from '../enums/i-i-s-test-t-тип-оплаты';

export default FlexberryEnum.extend({
  enum: tТипОплатыEnum,
  sourceType: 'IIS.Test.tТипОплаты'
});
