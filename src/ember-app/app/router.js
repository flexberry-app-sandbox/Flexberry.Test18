import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-запись-l');
  this.route('i-i-s-test-запись-e',
  { path: 'i-i-s-test-запись-e/:id' });
  this.route('i-i-s-test-запись-e.new',
  { path: 'i-i-s-test-запись-e/new' });
  this.route('i-i-s-test-клиент-l');
  this.route('i-i-s-test-клиент-e',
  { path: 'i-i-s-test-клиент-e/:id' });
  this.route('i-i-s-test-клиент-e.new',
  { path: 'i-i-s-test-клиент-e/new' });
});

export default Router;
