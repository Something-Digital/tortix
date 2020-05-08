export default class InputFilter {
  constructor({ id }) {
    this.id = id;
  }

  static create(rawData) {
    // TODO: Add checks and exceptions
    return new this(rawData);
  }
}
