/** Class representing search form. */
class SearchFormController {
  /**
   * Initiate the search form controller.
   */
  constructor() {
    /**
     * Search form name
     * @type {String}
     */
    this.searchForm = 'searchForm';

    /**
     * Search text
     * @type {String}
     */
    this.searchText = '';
  }

  /**
   * Search input change
   */
  searchChanged() {
    // trigger search on searchForm invalid
    if(this.searchForm.$invalid) {
      this.onSearch({term: ''});
    }
  }

  /**
   * Clear search input
   */
  clearSearch() {
    this.searchText = '';
    // switch boolean back to false
    this.triggerClearSearch = false;
  }
}

SearchFormController.$inject = [];
export default SearchFormController;
