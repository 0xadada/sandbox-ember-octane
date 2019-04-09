import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  model;

  @action
  addPerson(name) {
    name = String.prototype.capitalize.call(name);
    this.model.push(name);
  }

  @action
  onSavePerson(originalName, index, newName) {
    // replace the item in the array with the new one
    this.model.splice(index, 1, newName);
    // signal to Ember the array has changed
    this.model = this.model;
  }
}
