import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ListPersonComponent extends Component {
  // new person name
  @tracked
  newName = '';

  @computed('this.args.people')
  get capitalizedPeople() {
    return this.args.people.map(person => String.prototype.capitalize.call(person))
  }

  @computed('this.args.people.length')
  get hasPeople() {
    return !!this.args.people.length;
  }

  @action
  createPerson(name) {
    this.args.addPerson(name);
    // reset the name set
    this.newName = '';
  }
}
