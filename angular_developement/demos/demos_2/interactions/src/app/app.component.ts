import { Component, OnDestroy } from '@angular/core';
import { MessageService } from './service/message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message: string;
  subscription: Subscription;
  constructor(public messageService: MessageService) { }
  ngOnInit() {
    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}