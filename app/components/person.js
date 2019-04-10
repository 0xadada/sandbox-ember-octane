import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class PersonComponent extends Component {
  @tracked
  tempName;

  @computed('@person')
  get name() {
    return this.args.person.name || 'person has no name';
  }

  @action
  save(person, name) {
    this.args.onSavePerson(name);
    return false;
  }
}
