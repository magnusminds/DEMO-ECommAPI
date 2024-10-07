import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { ProductInterface } from '../../../models/user/product/product.model';
import { RoutingUrls } from '../../../constant/routing-url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-product',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './display-product.component.html',
  providers: [ProductService]
})
export class DisplayProductComponent implements OnInit {

  productList?: ProductInterface[];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe({
      complete: () => {
      },
      next: (res: any) => {
        console.log(res);
        this.productList = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  addProduct() {
    this.router.navigateByUrl(RoutingUrls.ADD_PRODUCT);
  }

  addUser(){
    this.router.navigateByUrl(RoutingUrls.ADD_USER);
  }

}
