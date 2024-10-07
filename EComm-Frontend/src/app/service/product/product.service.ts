import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../../models/user/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getProducts() {
    return this.get('products');
  }

  addProduct(param: ProductInterface) {
    return this.post('products', param);
  }
}
