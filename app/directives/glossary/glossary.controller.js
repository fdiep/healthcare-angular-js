/** Class representing list of glossary items. */
class GlossaryController {
  /**
   * Initiate the glossary controller.
   * @param {ApiService} ApiService
   */
  constructor(ApiService) {
    /**
     * Reference to the ApiService Object
     * @type {ApiService}
     */
    this.ApiService = ApiService;

    /**
     * Glossary language to display
     * @type {String}
     */
    this.lang = 'both';

    /**
     * All glossaries
     * @type {Array}
     */
    this.glossaries = [];

    /**
     * Filter glossaries by language
     * @type {Object}
     */
    this.glossariesByLang = {};

    /**
     * Visible glossaries
     * @type {Array}
     */
    this.visibleGlossaries = [];

    /**
     * Clear search boolean
     * @type {Boolean}
     */
    this.triggerClearSearch = false;

    // get the glossary glossaries
    this.getGlossaries();
  }

  /**
   * User ApiService to get all glossary items
   */
  getGlossaries() {
    this.ApiService.getGlossary()
    .then((glossaries) => {
      this.glossaries = glossaries;
      this.orderGlossaries();
      this.showGlossaries();
    });
  }

  /**
   * Decide what glossary items to show
   */
  showGlossaries() {
    // clear search first
    this.triggerClearSearch = true;
    // show glossaries depending on selected language
    if(this.lang === 'both') {
      this.visibleGlossaries = this.glossaries;
    } else {
      this.visibleGlossaries = this.getGlossariesByLang(this.lang);
    }
  }

  /**
   * Filter glossary items by language
   * @param {String} lang
   */
  getGlossariesByLang(lang) {
    if(this.glossariesByLang[lang]) {
      // return saved glossaries by language
      return this.glossariesByLang[lang];
    } else if(this.glossariesByLang[lang] === false) {
      // no glossaries were found with this language
      return [];
    } else {
      // find glossaries by language
      this.glossariesByLang[lang] = this.glossaries.filter((glossary) => {
        return glossary.lang === lang;
      });

      if (this.glossariesByLang[lang].length === 0) {
        // make this false so we do not try to find glossaries by this language again
        this.glossariesByLang[lang] = false;
        return [];
      }

      return this.glossariesByLang[lang];
    }
  }

  /**
   * Filter glossary items by search term
   * @param {String} term
   */
  searchGlossary(term) {
    if(term === '') {
      this.showGlossaries();
    }
    // find all glossaries with term in title
    this.visibleGlossaries = this.visibleGlossaries.filter((glossary) => {
      return glossary.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  /**
   * Order glossary items alphabetically by title
   */
  orderGlossaries() {
    this.glossaries.sort((a, b) => {
      if (a.title < b.title){
        return -1;
      }
      if (a.title > b.title){
        return 1;
      }
      return 0;
    });
  }
}

GlossaryController.$inject = ['ApiService'];
export default GlossaryController;
