import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../../models/user/user.model';
import { RoutingUrls } from '../../../constant/routing-url';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../../store/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './display-user.component.html',
  styleUrl: './display-user.component.scss',
  providers: [UserService]
})
export class DisplayUserComponent implements OnInit {
  public userList?: UserInterface[];
  public userListRedux: Observable<UserInterface[]>;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _store: Store,
  ) {
    const users$ = this._store.select(selectAllUsers);
    this.userListRedux = users$;
  }

  ngOnInit(): void {
    // this.getUserList();
  }

  getUserList(): void {
    this._userService.getUsers().subscribe({
      complete: () => {
      },
      next: (res: any) => {
        this.userList = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  addUser(isRedux: boolean = false): void {
    if(isRedux){
      this._router.navigateByUrl(`${RoutingUrls.ADD_USER}/true`);
    }
    else{
      this._router.navigateByUrl(RoutingUrls.ADD_USER);
    }
  }

  addProduct(){
    this._router.navigateByUrl(RoutingUrls.ADD_PRODUCT);
  }

}
