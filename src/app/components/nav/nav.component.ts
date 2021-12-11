import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ShareService } from 'src/app/services/share.service';
import { StoreService } from 'src/app/services/store.service';
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
    public userService: UserService,
    public storeService: StoreService,
    public shareService: ShareService

  ) {}

  ngOnInit(): void {}

  openModal (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
