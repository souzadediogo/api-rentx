"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkusRepository = void 0;

var _Sku = require("../../entities/Sku");

var _typeorm = require("typeorm");

//DTO -> Data 
class SkusRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Sku.Sku);
  }

  async create({
    name,
    skuID,
    brandName,
    category,
    description,
    photos,
    specification
  }) {
    const sku = this.repository.create({
      name,
      skuID,
      brandName,
      // Problema: imagino que seja pela relation
      // one-to-many do typeorm
      category,
      description,
      photos,
      specification
    });
    await this.repository.save(sku);
  }

  async list() {
    const skus = await this.repository.find();
    return skus;
  }

  async findBySkuID(skuID) {
    const sku = await this.repository.findOne({
      skuID
    });
    return sku;
  }

}

exports.SkusRepository = SkusRepository;
;