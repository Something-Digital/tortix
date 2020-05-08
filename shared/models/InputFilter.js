/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
export class InputFilter {
  constructor({ id }) {
    this.id = id;
  }

  static create(rawData) {
    // TODO: Add checks and exceptions
    return new this(rawData);
  }
}
