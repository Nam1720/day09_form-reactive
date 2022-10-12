import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/userService';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss'],
  providers: [UserService]
})
export class UserApiComponent implements OnInit {
  user!: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.getUser() muốn phát gọi luôn thì ném hàm vào đấy ô kê
  }

  getUser(){
    this.userService.getUser().subscribe(user => this.user = user)
  }

}
