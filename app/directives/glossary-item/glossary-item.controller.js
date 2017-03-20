/** Class representing single glossary item. */
class GlossaryItemController {
  /**
   * Initiate the glossary item controller.
   * @param {$window} $window
   */
  constructor($window) {
    /**
     * Reference to the $window Object
     * @type {$window}
     */
    this.$window = $window;

    /**
     * Url to healthcare.gov
     * @type {String}
     */
    this.url = 'https://www.healthcare.gov';
  }

  /**
   * Navigate to glossary item in Healthcare.gov
   */
  navigateToGlossary() {
    console.log('this.glossary.url', this.glossary.url);
    this.$window.open(
      this.url + this.glossary.url,
      '_blank',
      'location=yes,height=720,width=1280,scrollbars=yes,status=yes'
    );
  }
}

GlossaryItemController.$inject = ['$window'];
export default GlossaryItemController;
