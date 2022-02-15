"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
//import v4 as uuid from "uuid";
const app = (0, express_1.default)();
app.use(express_1.default.json());
const offers = [];
//Rotas
app.get("/offers", routes_1.default);
app.get("/offers/:offerID", (req, res) => {
});
app.post("/offers", (req, res) => {
});
app.put("/offers/:id", (req, res) => {
});
app.delete("/offers", (req, res) => {
});
app.listen(3333, () => { });
