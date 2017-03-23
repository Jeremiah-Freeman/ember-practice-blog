import DS from 'ember-data';

export default DS.Model.extend({
  article: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  title: DS.attr()
});
