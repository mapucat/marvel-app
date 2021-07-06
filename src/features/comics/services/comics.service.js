import { api } from '@common/environment';
import axios from "axios";

export default class ComicsService {
  apiEndpoint = api.MVL_BACKEND_URL;

  authApiParams = {
    apikey: api.MVL_PUBLIC_API_KEY,
    ts: process.env.REACT_APP_TS,
    hash: process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
  };

  /**
   * Fetches lists of comics with optional filters
   * @param {*} dateRange format = YYYY-MM-DD,YYYY-MM-DD
   * @param {*} orderBy posible options = [ focDate, onsaleDate, title, issueNumber, modified, -focDate, -onsaleDate, -title, -issueNumber, -modified ]
   */
  getComics = (dateRange, orderBy) => {
    return axios.get(`${this.apiEndpoint}/comics`, {
      params: {
        dateRange: dateRange ? dateRange : undefined,
        orderBy: orderBy ? orderBy : undefined,
        ...this.authApiParams
      }
    });
  };

  /**
   * Fetches a single comic resource
   * @param {*} id commic id
   */
  getComic = (id) => {
    return axios.get(`${this.apiEndpoint}/comics/${id}`, {
      ...this.authApiParams
    });
  };
}
