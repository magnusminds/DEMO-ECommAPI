import { HttpClient } from '@angular/common/http';

export abstract class BaseService {
  protected base = 'https://localhost:7271/';

  constructor(protected http: HttpClient) { }

  post(url: string, request: any) {
    return this.http.post(this.base + url, request);
  }

  get(url: string) {
    return this.http.get(this.base + url);
  }

  delete(url: string, id: number) {
    return this.http.delete(this.base + url + id);
  }

}