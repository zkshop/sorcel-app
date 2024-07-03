import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class Base {
  instance: AxiosInstance;
  static token: string | undefined;
  static backendBaseUrl: string = (() => {
    console.log('!BACKEND_BASEURL', process.env.BACKEND_BASEURL);
    if (process.env.BACKEND_BASEURL) return process.env.BACKEND_BASEURL;
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
