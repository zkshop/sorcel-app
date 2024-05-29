import type { AxiosInstance } from 'axios';
import axios from 'axios';

export type filter<T, K> = {select: T} | {filter: K};
export type apiReturnValue<T> = {sucess: boolean, data: T};

export class Base {
  instance: AxiosInstance;
  static token: string | undefined;
  static backendBaseUrl: string = (() => {
    if (process.env.BACKEND_BASEURL && process.env.BACKEND_BASEURL)
      return process.env.BACKEND_BASEURL;
    return `http://localhost:${process.env.SORCEL_DEV_BACKEND_PORT}`;
  })();

  constructor(private baseUrl: string = Base.backendBaseUrl) {
    const headers = Base.token ? { Authorization: `Bearer ${Base.token}` } : {};
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: headers,
    });
  }

  getInstance() {
    return this.instance;
  }

  setInstance(newInstance: AxiosInstance) {
    this.instance = newInstance;
    return this.instance;
  }
}
