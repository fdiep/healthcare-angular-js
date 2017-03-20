/** Class representing Contact Form. */
class ContactController {
  /**
   * Initiate the Contact controller.
   */
  constructor() {
    /**
     * Contact form
     * @type {String}
     */
    this.contactForm = 'contactForm';

    /**
     * Email regex pattern
     * @type {Regex}
     */
    this.pattern_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    /**
     * Reasons array
     * @type {Array}
     */
    this.reasonOptions = [{
      name: 'Healthcare Marketplace'
    },{
      name: 'Technical Support'
    },{
      name: 'Website Feedback'
    }];
  }

  /**
   * Form submit function
   */
  submit() {
    console.log('Form Submitted');
  }
}

ContactController.$inject = [];
export default ContactController;
