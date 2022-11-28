import { UserService } from '../../user/user.service';
import { IUser } from './../../shared/interfaces/user';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    if (this.userService.currentUser === undefined) {
      stream$ = this.userService.getProfile();
    } else {
      stream$ = of(this.userService.currentUser);
    }
    const isLoggedData = route.data.isLogged;

    return stream$.pipe(
      tap((user) => {
        if (typeof isLoggedData !== 'boolean' || isLoggedData === !!user) { return user; }
        this.router.navigateByUrl(route.data.redirectUrl);
        return user;
      }),
      map((result: IUser | null) => isLoggedData === !!result)

    )
  }
}
