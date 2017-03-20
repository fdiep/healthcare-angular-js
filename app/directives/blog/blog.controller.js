/** Class representing list of blog posts. */
class BlogController {
  /**
   * Initiate the blog controller.
   * @param {ApiService} ApiService
   */
  constructor(ApiService) {
    /**
     * Reference to the ApiService Object
     * @type {ApiService}
     */
    this.ApiService = ApiService;

    /**
     * Post language to display
     * @type {String}
     */
    this.lang = 'both';

    /**
     * All posts
     * @type {Array}
     */
    this.blogs = [];

    /**
     * Filter posts by language
     * @type {Object}
     */
    this.blogsByLang = {};

    /**
     * Visible posts
     * @type {Array}
     */
    this.visibleBlogs = [];

    // get the blog posts
    this.getPosts();
  }

  /**
   * Use ApiService to get blog posts
   */
  getPosts() {
    this.ApiService.getBlogPosts()
    .then((blogs) => {
      this.blogs = blogs;
      this.orderBlogs();
      this.showPosts();
    });
  }

  /**
   * Decide what posts to show
   */
  showPosts() {
    // show posts depending on selected language
    if(this.lang === 'both') {
      this.visibleBlogs = this.blogs;
    } else {
      this.visibleBlogs = this.getPostsByLang(this.lang);
    }
  }

  /**
   * Filter posts by language
   * @param {String} lang
   */
  getPostsByLang(lang) {
    if(this.blogsByLang[lang]) {
      // return saved posts by language
      return this.blogsByLang[lang];
    } else if(this.blogsByLang[lang] === false) {
      // no posts were found with this language
      return [];
    } else {
      // find posts by language
      this.blogsByLang[lang] = this.blogs.filter((blog) => {
        return blog.lang === lang;
      });

      if (this.blogsByLang[lang].length === 0) {
        // make this false so we do not try to find posts by this language again
        this.blogsByLang[lang] = false;
        return [];
      }

      return this.blogsByLang[lang];
    }
  }

  /**
   * Order posts by date
   */
  orderBlogs() {
    this.blogs.sort((a, b) => {
      return new Date(a.start).getTime() - new Date(b.start).getTime();
    });
  }
}

BlogController.$inject = ['ApiService'];
export default BlogController;
