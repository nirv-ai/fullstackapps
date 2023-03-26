/**
 * shared routes
 */
import axios, { type AxiosInstance } from "axios";
import { toUrl } from "../utils/parser";

export const BFF: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BFF_BASE_URL,
  timeout: 3000,
  withCredentials: true,
});

// example routes
export const PLAYERS_ENDPOINT = "/v1/player";
export const PLAYERS_PLAY_ENDPOINT = `${PLAYERS_ENDPOINT}/play`;
export const PLAYERS_JOIN_ENDPOINT = `${PLAYERS_ENDPOINT}/join`;
export const PLAYERS_LOGOUT_ENDPOINT = `${PLAYERS_ENDPOINT}/logout`;

export const PLAYER_ENDPOINT = (callsign: string) =>
  `${PLAYERS_ENDPOINT}/p/${toUrl(callsign)}`;
