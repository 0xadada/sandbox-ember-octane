import DS from 'ember-data';
const { attr, Model } = DS;

export default class PersonModel extends Model {
  @attr('string')
  name;
}
