import ky from "ky";
import bourne from "@hapi/bourne";

// @see https://github.com/sindresorhus/ky#kycreatedefaultoptions
// @see https://github.com/sindresorhus/ky#options
const base = ky.create({
  prefixUrl: "https://www.nirv.ai/api/v1",
  headers: {},
  retry: {
    limit: 1,
    methods: ["get"],
  },
  parseJson(data) {
    // @see https://hapi.dev/module/bourne/api/?v=3.0.0
    return bourne.parse(data || {}, undefined, { protoAction: "remove" });
  },
});

/**
 * const otherApi = base.extend({ blah })
 */

export const api = {
  get({ url, searchParams = {}, ac = new AbortController() }) {
    const { signal } = ac;
    return [base.get(url, { signal, searchParams }).json(), ac];
  },
  post({ url, json = {}, searchParams, ac = new AbortController() }) {
    const { signal } = ac;
    return [base.post(url, { json, searchParams, signal }).json(), ac];
  },
};
