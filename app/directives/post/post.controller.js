/** Class representing single post item. */
class PostController {
  /**
   * Initiate the post controller.
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
   * Navigate to post in Healthcare.gov
   */
  navigateToPost() {
    this.$window.open(
      this.url + this.post.url,
      '_blank',
      'location=yes,height=720,width=1280,scrollbars=yes,status=yes'
    );
  }
}

PostController.$inject = ['$window'];
export default PostController;
