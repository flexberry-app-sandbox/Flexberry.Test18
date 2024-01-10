import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestЗаписьLForm from './forms/i-i-s-test-запись-l';
import IISTestКлиентLForm from './forms/i-i-s-test-клиент-l';
import IISTestЗаписьEForm from './forms/i-i-s-test-запись-e';
import IISTestКлиентEForm from './forms/i-i-s-test-клиент-e';
import IISTestЗаписьModel from './models/i-i-s-test-запись';
import IISTestКлиентModel from './models/i-i-s-test-клиент';
import IISTestОказаниеУслугModel from './models/i-i-s-test-оказание-услуг';
import IISTestУслугаModel from './models/i-i-s-test-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-запись': IISTestЗаписьModel,
    'i-i-s-test-клиент': IISTestКлиентModel,
    'i-i-s-test-оказание-услуг': IISTestОказаниеУслугModel,
    'i-i-s-test-услуга': IISTestУслугаModel
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'Test',
          title: 'Test',
          'i-i-s-test-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-test-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-запись-l': IISTestЗаписьLForm,
    'i-i-s-test-клиент-l': IISTestКлиентLForm,
    'i-i-s-test-запись-e': IISTestЗаписьEForm,
    'i-i-s-test-клиент-e': IISTestКлиентEForm
  },

});

export default translations;
