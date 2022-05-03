"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jest_1 = require("ts-jest");
const tsconfig_json_1 = require("./tsconfig.json");
exports.default = {
    bail: true,
    clearMocks: true,
    coverageProvider: "v8",
    moduleNameMapper: (0, ts_jest_1.pathsToModuleNameMapper)(tsconfig_json_1.compilerOptions.paths, { prefix: "<rootDir>/src/" }),
    preset: "ts-jest",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testMatch: [
        "**/*.spec.ts",
    ],
};
