import { check, body /*, query, param*/ } from "express-validator";

// @see https://github.com/validatorjs/validator.js
const baseSanitizer = (field: string, location = check) =>
  location(field).trim().escape().notEmpty();

// @see https://github.com/validatorjs/validator.js#sanitizers
// @see https://express-validator.github.io/docs/check-api.html
// body, cookie, header, param, query
// location === check: checks them all
export const isText = (field: string, location = check) =>
  baseSanitizer(field, location).isString();
export const isNumber = (field: string, location = check) =>
  baseSanitizer(field, location).isNumeric();
export const isInt = (field: string, location = check) =>
  isNumber(field, location).isInt();
export const isEmail = (field: string, location = check) =>
  location(field, location).trim().isEmail().normalizeEmail();
export const isUrl = (field: string, location = check) =>
  location(field).trim().isURL();

export const SearchValidator = [
  isText("name", body).optional(),
  isInt("limit", body).optional(),
  isInt("after", body).optional(),
  isText("args.*", body),
  isText("fields.*", body),
  isText("ops.*.type", body).optional(),
];
