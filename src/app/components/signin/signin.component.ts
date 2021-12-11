import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  modalRef!: BsModalRef;
  constructor(
    private modalService: BsModalService,
    public alert: AlertService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close_modal () {
    this.modalService.hide();
  }
  openModal (template: TemplateRef<any>) {
    this.close_modal();

    setTimeout(() => {
      this.modalRef = this.modalService.show(template);
    }, 200);
  }

  //User authentication
  signIn (email: any, password: any) {
    if (!email || !password) {
      this.alert.error('All fields are required!');
      return;
    }

    this.userService.signIn(email, password).subscribe((user_server: any) => {
      //console.log(user_server);
      if (user_server.message == "Logged In Successfully!") {
        this.alert.success(user_server.message);
        //console.log(user_server.users[ 0 ]._id);
        

        let user: User = {
          _id: '',
          email: '',
          surname: '',
          name: '',
          weight: ''
        };
        user._id = user_server.users[ 0 ]._id && user_server.users[ 0 ]._id;
        user.email = user_server.users[ 0 ].email && user_server.users[ 0 ].email;
        user.name = user_server.users[ 0 ].name && user_server.users[ 0 ].name;
        user.weight = user_server.users[ 0 ].skills && user_server.users[ 0 ].skills;
        user.surname = user_server.users[ 0 ].surname && user_server.users[ 0 ].surname;

        this.close_modal();
        this.router.navigate([ '/dash' ]);
        return;
      }else (user_server.message == "Login error! Please check your details")
        this.alert.error(user_server.message);
      
    })
  }

}
