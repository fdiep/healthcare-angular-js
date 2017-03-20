import angular from 'angular';
import post from './post.directive';

export default angular
  .module('Healthcare.directives.post', [])
  .directive('post', post);
