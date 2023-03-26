// @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export interface NirvErrorInterface extends Error {
  message: string;
  statusCode: number;
  name: string;
  nirvai: number;
  headers?: Record<string, string>;
}
// @see https://stackoverflow.com/questions/47248741/add-properties-to-javascript-error-object
export class NirvError implements NirvErrorInterface {
  cause?: unknown;
  headers?: Record<string, string>;
  message: string;
  msg?: string;
  name: string;
  nirvai: number;
  stack?: string;
  statusCode: number;

  constructor(name, httpStatusCode = 400, message) {
    this.message = message ?? name;
    this.name = name;
    this.statusCode = httpStatusCode;
    this.nirvai = 1;
    this.headers = {};
  }
}

export const BaseError = (
  name: string,
  httpStatusCode = 418,
  message: string = name
): NirvError => new NirvError(name, httpStatusCode, message);

export const INVALID_REQUEST_ERROR = "INVALID_REQUEST_ERROR";
export const InvalidRequestError = (message?, httpStatusCode = 400) =>
  BaseError(INVALID_REQUEST_ERROR, httpStatusCode, message);

export const INVALID_RESPONSE_ERROR = "INVALID_RESPONSE_ERROR";
export const InvalidResponseError = (message?, httpStatusCode = 404) =>
  BaseError(INVALID_RESPONSE_ERROR, httpStatusCode, message);

export const INVALID_PROPS_ERROR = "INVALID_PROPS_ERROR";
export const InvalidPropsError = (message?, httpStatusCode = 400) =>
  BaseError(INVALID_PROPS_ERROR, httpStatusCode, message);

export const ACTION_NOT_ALLOWED_ERROR = "ACTION_NOT_ALLOWED_ERROR";
export const ActionNotAllowedError = (message?, httpStatusCode = 403) =>
  BaseError(ACTION_NOT_ALLOWED_ERROR, httpStatusCode, message);

export const OOPS_CONTACT_SUPPORT_MY_BAD = "OOPS_CONTACT_SUPPORT_MY_BAD";
export const MyBadContactSupportError = (message?, httpStatusCode = 500) =>
  BaseError(OOPS_CONTACT_SUPPORT_MY_BAD, httpStatusCode, message);

export const AUTH_REQUIRED = "AUTH_REQUIRED";
export const AuthRequiredError = (message?, httpStatusCode = 401) =>
  BaseError(AUTH_REQUIRED, httpStatusCode, message);

export const ZOMBIE_RESOURCE = "ZOMBIE_RESOURCE";
export const ZombieResourceError = (message?, httpStatusCode = 503) =>
  BaseError(ZOMBIE_RESOURCE, httpStatusCode);

export const Errors = {
  InvalidRequestError,
  InvalidResponseError,
  InvalidPropsError,
  ActionNotAllowedError,
  MyBadContactSupportError,
  AuthRequiredError,
};
