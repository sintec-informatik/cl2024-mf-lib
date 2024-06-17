import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MfLibService {

  private isDarkMode = new BehaviorSubject<boolean>(false)

  public isDarkMode$ = this.isDarkMode.asObservable()

  constructor() { }

  setDarkMode(isDarkMode: boolean) {
    console.log("Lib receives new dark mode: " + isDarkMode)
    this.isDarkMode.next(isDarkMode);
  }
}
