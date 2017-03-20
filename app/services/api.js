import angular from 'angular';

/** Class representing Api Service. */
class ApiService {
  /**
   * Initiate the Api Service.
   * @param {$http} $http
   * @param {$q} $q
   */
  constructor($http, $q) {
    /**
     * Reference to the $http Object
     * @type {$http}
     */
    this.$http = $http;

    /**
     * Reference to the $q Object
     * @type {$q}
     */
    this.$q = $q;

    /**
     * Main api url
     * @type {String}
     */
    this.url = '/api';
  }

  /**
   * Get all blog posts from api
   */
  getBlogPosts() {
    const _self = this;
    const blogsUrl = _self.url + '/blog.json';
    const deferred = _self.$q.defer();

    this.$http.get(blogsUrl)
    .then((response) => {
      // resolve with array of blogs
      deferred.resolve(response.data.blog);
    }, (error) => {
      console.warn('Error in blogs', error);
      // error while getting blogs. reject with empty array
      deferred.reject([]);
    });

    return deferred.promise;
  }
  /**
   * Get all glossary items from api
   */
  getGlossary() {
    const _self = this;
    const glossaryUrl = _self.url + '/glossary.json';
    const deferred = _self.$q.defer();

    this.$http.get(glossaryUrl)
    .then((response) => {
      // resolve with array of glossary
      deferred.resolve(response.data.glossary);
    }, (error) => {
      // error while getting glossary. reject with empty array
      deferred.reject([]);
    });

    return deferred.promise;
  }
}

ApiService.$inject = ['$http', '$q'];

export default angular
  .module('Healthcare.services.api', [])
  .service('ApiService', ApiService);
