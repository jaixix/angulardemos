import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private acccountService: AccountService
  ) {}

  ngOnInit(): void {}

  onCreateAccount(accountName: string, status: string) {
    this.acccountService.addAccount(accountName, status);
    this.loggingService.logAccountCreated(accountName, status);
  }
}
