import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ListPersonComponent extends Component {
  @service
  store;

  // new person name
  @tracked
  newName = '';

  @computed('this.args.people.length')
  get mappedPeople() {
    if (typeof this.args.mapper === 'function') {
      return this.args.mapper(this.args.people);
    } else {
      return this.args.people;
    }
  }

  @computed('this.args.people.length')
  get hasPeople() {
    return !!this.args.people.length;
  }

  @action
  createPerson(name) {
    if (name.length) {
      this.args.addPerson(name);
      // reset the form
      this.newName = '';
    }
    // prevent the form submission
    return false;
  }
}
