import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LogginService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(
    private loggingService: LogginService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  @Input()
  account: {
    name: string;
    status: string;
  };

  @Input()
  id: number = 0;

  changeStatus(status: string) {
    this.loggingService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status);
  }
}