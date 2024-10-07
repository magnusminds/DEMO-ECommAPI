import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInterface } from '../../../models/user/user.model';
import { Store } from '@ngrx/store';
import { addUser } from '../../../store/user.actions';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RoutingUrls } from '../../../constant/routing-url';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  providers: [UserService]
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});
  public formInvalid: boolean = false;
  public isRedux?: string | null;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _store: Store,
    private _router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((param: Params) => {
      if (param['id']) {
        this.isRedux = param['id'];
      }
    });
  }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(): void {
    this.userForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
    })
  }

  addUser(): void {
    this.formInvalid = false;
    if (this.userForm.valid) {
      if (this.isRedux?.length) {
        this.addReduxUser();
      }
      else {
        this._userService.addUser(this.userForm.value).subscribe({
          complete: () => {
          },
          next: (res: any) => {
            this._router.navigateByUrl(RoutingUrls.USER);
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    }
    else {
      this.formInvalid = true;
    }
  }

  addReduxUser(): void {
    const user: UserInterface = { ...this.userForm.value };
    this._store.dispatch(addUser({ user }));
    this._router.navigateByUrl(RoutingUrls.USER);
  }

}
