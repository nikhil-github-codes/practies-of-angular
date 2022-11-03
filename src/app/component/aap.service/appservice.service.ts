import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }

  // username= new Subject<string>()
  username= new BehaviorSubject<string>("")
}
