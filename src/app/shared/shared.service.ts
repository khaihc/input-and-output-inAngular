import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  messageSharedService: string;

  constructor() {}

  setMessage(data: any) {
    this.messageSharedService = data;
  }
  getMessage() {
    return this.messageSharedService;
  }
}
