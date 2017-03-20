import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import config from './config';
import directives from './directives';
import filters from './filters';
import services from './services';
import styles from '../styles/main.scss';

export default angular.module('Healthcare', [
  'ngSanitize',
  'ui.router',
  config.name,
  directives.name,
  filters.name,
  services.name
]);
