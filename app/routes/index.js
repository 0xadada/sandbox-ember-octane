import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexRoute extends Route {
  @service
  store;

  @tracked
  people = [];

  model() {
    const people = this.store.peekAll('person');
    this.people.concat(people.toArray());
    return this.people;
  }
}
