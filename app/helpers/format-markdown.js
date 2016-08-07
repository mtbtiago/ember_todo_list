import Ember from 'ember';
// inform JShint to ignore 'showdown is not defined'
/* globals showdown */

export function formatMarkdown(params) {
  return Ember.String.htmlSafe(new showdown.Converter().makeHtml(params[0]));
}

export default Ember.Helper.helper(formatMarkdown);
