import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-запись-l': IISTestЗаписьLForm,
    'i-i-s-test-клиент-l': IISTestКлиентLForm,
    'i-i-s-test-запись-e': IISTestЗаписьEForm,
    'i-i-s-test-клиент-e': IISTestКлиентEForm
  },

});

export default translations;
