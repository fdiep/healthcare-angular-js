import angular from 'angular';
import blogDirective from './blog.directive';

export default angular
  .module('Healthcare.directives.blog', [])
  .directive('blog', blogDirective);
