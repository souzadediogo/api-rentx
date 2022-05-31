"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandsRepository = void 0;

var _Brand = require("../../entities/Brand");

var _typeorm = require("typeorm");

//DTO -> Data 
class BrandsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Brand.Brand);
  }

  async create({
    brandName
  }) {
    const brand = this.repository.create({
      brandName: brandName,
      created_at: new Date(),
      updated_at: new Date()
    });
    await this.repository.save(brand);
  }

  async list() {
    const brands = await this.repository.find();
    return brands;
  }

  async findByBrandName(brandName) {
    const brand = await this.repository.findOne({
      brandName: brandName
    });
    return brand;
  }

}

exports.BrandsRepository = BrandsRepository;
;