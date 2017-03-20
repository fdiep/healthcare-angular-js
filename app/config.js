import angular from 'angular';

/**
 * Define application routes.
 * @param {$stateProvider} $stateProvider
 * @param {$urlRouterProvider} $urlRouterProvider
 */
function routes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/blog');

  $stateProvider.state({
    name: 'blog',
    url: '/blog',
    template: '<blog></blog>'
  });

  $stateProvider.state({
    name: 'glossary',
    url: '/glossary',
    template: '<glossary></glossary>'
  });

  $stateProvider.state({
    name: 'contact',
    url: '/contact',
    template: '<contact></contact>'
  });
}

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default angular
  .module('Healthcare.config', [])
  .config(routes);
