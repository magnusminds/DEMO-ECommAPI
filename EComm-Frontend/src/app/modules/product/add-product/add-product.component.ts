import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../service/product/product.service';
import { Router } from '@angular/router';
import { RoutingUrls } from '../../../constant/routing-url';
import { ProductInterface } from '../../../models/user/product/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
  providers: [ProductService]
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup = new FormGroup({});
  public productList?: ProductInterface[];
  public formInvalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initProductForm();
  }

  initProductForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', [Validators.required]],
      price: [null, Validators.required],
      availableQuantity: ['', Validators.required],
      id: ['']
    })
  }


  addProduct() {
    this.formInvalid = false;
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        complete: () => {
          this.router.navigateByUrl(RoutingUrls.PRODUCT);
        },
        next: (res: any) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    else {
      this.formInvalid = true;
    }
  }

}
