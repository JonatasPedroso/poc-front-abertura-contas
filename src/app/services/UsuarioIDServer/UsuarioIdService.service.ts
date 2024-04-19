import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioIdServiceService {
  private userIdSubject = new BehaviorSubject<number | null>(null);
  userId$ = this.userIdSubject.asObservable();

  constructor() {}

  setUserId(userId: number) {
    this.userIdSubject.next(userId);
  }

  getUserId(): Observable<number | null> {
    return this.userId$;
  }

}
