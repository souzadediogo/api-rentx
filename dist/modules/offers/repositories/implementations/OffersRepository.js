"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OffersRepository = void 0;
var Offer_1 = require("../../entities/Offer");
var typeorm_1 = require("typeorm");
//DTO -> Data 
var OffersRepository = /** @class */function () {
    // private static INSTANCE: OffersRepository;
    function OffersRepository() {
        this.repository = (0, typeorm_1.getRepository)(Offer_1.Offer);
    }
    OffersRepository.prototype.create = function (_a) {
        var seller = _a.seller,
            offerTitle = _a.offerTitle,
            offerSubTitle = _a.offerSubTitle,
            offerUrl = _a.offerUrl,
            status = _a.status,
            categoryID = _a.categoryID,
            offerID = _a.offerID,
            sellerID = _a.sellerID,
            skuID = _a.skuID,
            salesChannel = _a.salesChannel,
            condition = _a.condition,
            free_shipping = _a.free_shipping,
            catalog_listing = _a.catalog_listing,
            catalog_product_id = _a.catalog_product_id,
            listing_type_id = _a.listing_type_id,
            brandInChannel = _a.brandInChannel,
            modelInChannel = _a.modelInChannel;
        return __awaiter(this, void 0, void 0, function () {
            var offer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        offer = this.repository.create({
                            seller: seller,
                            offerTitle: offerTitle,
                            offerSubTitle: offerSubTitle,
                            offerUrl: offerUrl,
                            status: status,
                            categoryID: categoryID,
                            offerID: offerID,
                            sellerID: sellerID,
                            skuID: skuID,
                            salesChannel: salesChannel,
                            condition: condition,
                            free_shipping: free_shipping,
                            catalog_listing: catalog_listing,
                            catalog_product_id: catalog_product_id,
                            listing_type_id: listing_type_id,
                            brandInChannel: brandInChannel,
                            modelInChannel: modelInChannel
                        });
                        console.log("offer", offer);
                        return [4 /*yield*/, this.repository.save(offer)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OffersRepository.prototype.createBatch = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            var offerBatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offerBatch = this.repository.create(items);
                        return [4 /*yield*/, this.repository.save(offerBatch)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OffersRepository.prototype.updateByOfferId = function (_a) {
        var id = _a.id,
            seller = _a.seller,
            offerTitle = _a.offerTitle,
            offerSubTitle = _a.offerSubTitle,
            offerUrl = _a.offerUrl,
            status = _a.status,
            categoryID = _a.categoryID,
            offerID = _a.offerID,
            sellerID = _a.sellerID,
            skuID = _a.skuID,
            salesChannel = _a.salesChannel,
            condition = _a.condition,
            free_shipping = _a.free_shipping,
            catalog_listing = _a.catalog_listing,
            catalog_product_id = _a.catalog_product_id,
            listing_type_id = _a.listing_type_id;
        return __awaiter(this, void 0, void 0, function () {
            var offer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        offer = this.repository.create({
                            id: id,
                            seller: seller,
                            offerTitle: offerTitle,
                            offerSubTitle: offerSubTitle,
                            offerUrl: offerUrl,
                            status: status,
                            categoryID: categoryID,
                            offerID: offerID,
                            sellerID: sellerID,
                            skuID: skuID,
                            salesChannel: salesChannel,
                            condition: condition,
                            free_shipping: free_shipping,
                            catalog_listing: catalog_listing,
                            catalog_product_id: catalog_product_id,
                            listing_type_id: listing_type_id
                        });
                        return [4 /*yield*/, this.repository.save(offer)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OffersRepository.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var offers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, this.repository.find()];
                    case 1:
                        offers = _a.sent();
                        return [2 /*return*/, offers];
                }
            });
        });
    };
    ;
    OffersRepository.prototype.listOfferByOfferID = function (offerID) {
        return __awaiter(this, void 0, void 0, function () {
            var offer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, this.repository.createQueryBuilder().select("offers").from(Offer_1.Offer, "offers").where("offers.offerID = :offerID", { offerID: offerID }).getOne()]; //findOne(offerID);
                    case 1:
                        offer = _a.sent() //findOne(offerID);
                        ;
                        return [2 /*return*/, offer];
                }
            });
        });
    };
    ;
    OffersRepository.prototype.listOffersBySellerUUID = function (sellerUUID) {
        return __awaiter(this, void 0, void 0, function () {
            var sellerOffers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, this.repository.find({ seller: sellerUUID })];
                    case 1:
                        sellerOffers = _a.sent();
                        return [2 /*return*/, sellerOffers];
                }
            });
        });
    };
    OffersRepository.prototype.listOffersBySalesChannelID = function (salesChannelID) {
        return __awaiter(this, void 0, void 0, function () {
            var salesChannelIdOffers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, this.repository.find({ salesChannel: salesChannelID })];
                    case 1:
                        salesChannelIdOffers = _a.sent();
                        return [2 /*return*/, salesChannelIdOffers];
                }
            });
        });
    };
    OffersRepository.prototype.listUUIDsfromOfferIDs = function (offerIDsArray) {
        return __awaiter(this, void 0, void 0, function () {
            var items;
            var _this = this;
            return __generator(this, function (_a) {
                items = offerIDsArray.map(function (offer) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = {};
                                    _b = {
                                        offerID: offer
                                    };
                                    return [4 /*yield*/, this.listOfferByOfferID(offer)];
                                case 1:
                                    return [2 /*return*/, (_a.offer = (_b.uuid = _c.sent(), _b), _a)];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return OffersRepository;
}();
exports.OffersRepository = OffersRepository;
;