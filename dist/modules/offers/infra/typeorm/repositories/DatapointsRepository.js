"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatapointsRepository = void 0;

var _Datapoint = require("../entities/Datapoint");

var _typeorm = require("typeorm");

class DatapointsRepository {
  // private static INSTANCE: OffersRepository;
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Datapoint.Datapoint);
  }

  async create({
    offer,
    offerid,
    offerStatus,
    price,
    basePrice,
    originalPrice,
    availableQty,
    soldQty
  }) {
    const datapoint = this.repository.create({
      offer,
      offerid,
      offerStatus,
      price,
      basePrice,
      originalPrice,
      availableQty,
      soldQty
    });
    await this.repository.save(datapoint);
  }

  async findByID(id) {
    const datapoint = await this.repository.findOne({
      id
    });
    return datapoint;
  }

  async listByOfferIdAndDateRange(offerid, beginDate, endDate) {
    const datapoints = await this.repository.createQueryBuilder("datapoints").select("datapoints").andWhere(`offerid = :offerid `, {
      offerid: `${offerid}`
    }).andWhere(`created_at >= :begin `, {
      begin: `${beginDate}`
    }).andWhere(`created_at <= :end `, {
      end: `${endDate}`
    }).getMany();
    return datapoints;
  }

}

exports.DatapointsRepository = DatapointsRepository;
;