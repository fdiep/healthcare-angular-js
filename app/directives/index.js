import angular from 'angular';
import blog from './blog';
import contact from './contact';
import glossary from './glossary';
import glossaryItem from './glossary-item';
import nav from './nav';
import post from './post';
import searchForm from './search-form';

export default angular.module('Healthcare.directives', [
  blog.name,
  contact.name,
  glossary.name,
  glossaryItem.name,
  nav.name,
  post.name,
  searchForm.name
]);
