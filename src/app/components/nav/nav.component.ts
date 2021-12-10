import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'Nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  modalRef!: BsModalRef;
  user: any;
  dropNav: any;

  constructor(
    private modalService: BsModalService,
    public userService: UserService
  ) {}

  ngOnInit(): void {}
}
