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
    // create a new array, splicing the new name into the old array
    let newPeople = [].concat(this.model);
    newPeople.splice(index, 1, newName);
    // replace the old array with the new to signal the array changed
    this.model = newPeople;
  }
}
