/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
export default class Vendor {
  constructor({
    id, vendor_name, vendor_city, vendor_rating, types, delivery, cake_photo_id,
  }) {
    this.id = id;
    this.vendorName = vendor_name;
    this.vendorCity = vendor_city;
    this.vendorRating = vendor_rating;
    this.types = types;
    this.delivery = delivery;
    this.cakePhotoId = cake_photo_id;
  }
}
