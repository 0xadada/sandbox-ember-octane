import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  model;

  @action
  addPerson(name) {
    name = String.prototype.capitalize.call(name);
    const person = this.store.createRecord('person', { name });
    let people = [].concat(this.model, person);
    this.model = people;
  }

  @action
  onSavePerson(originalName, index, newName) {
    // replace the item in the array with the new one
    this.model.splice(index, 1, newName);
    // signal to Ember the array has changed
    this.model = this.model;
  }

  mapUppercase(people) {
    return people.map(person => ({
        name: String.prototype.toUpperCase.call(person.name)
      })
    );
  }

  mapLowercase(people) {
    return people.map(person => ({
        name: String.prototype.toLowerCase.call(person.name)
      })
    );
  }
}
