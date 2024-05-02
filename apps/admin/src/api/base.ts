import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class Base {
  instance: AxiosInstance;
  static backendBaseUrl: string =
    (process.env.BACKEND_BASEURL.length && process.env.BACKEND_BASEURL) ||
    `http://localhost:${process.env.SORCEL_DEV_BACKEND_PORT}`;
  constructor(private baseUrl: string = Base.backendBaseUrl) {
    this.instance = axios.create({
      baseURL: this.baseUrl,
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
