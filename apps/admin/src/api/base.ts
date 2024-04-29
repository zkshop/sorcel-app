import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class Base {
  constructor(
    private baseUrl: string,
    protected instance: AxiosInstance,
  ) {
    this.instance = axios.create({
      baseURL: this.baseUrl,
    });
  }
}
