import angular from 'angular';
import moment from 'moment';

/**
 * Format date filter
 */
function formatDate() {
  return (value) => {
    return moment(value, 'YYYY-MM-DD H:m:s Z').format('MM/DD/YYYY');
  };
}

export default angular
  .module('Healthcare.filters.formatDate', [])
  .filter('formatDate', formatDate);
