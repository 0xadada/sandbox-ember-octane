import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class PersonComponent extends Component {
  constructor() {
    super(...arguments);
    this.tempName = this.args.person.name;
  }

  @tracked
  tempName;

  @computed('@person')
  get name() {
    return this.args.person.name || 'person has no name';
  }

  @action
  save(name) {
    this.args.onSavePerson(name);
    return false;
  }
}
