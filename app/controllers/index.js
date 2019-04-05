import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class IndexController extends Controller {
  @action
  addPerson(name) {
    name = String.prototype.capitalize.call(name);
    this.model.push(name);
  }
}
