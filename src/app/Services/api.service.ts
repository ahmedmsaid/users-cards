import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAllUsersResponse } from '../Models/IAllUsersResponse';
import { IOneUserResponse } from '../Models/IOneUserResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private searchResults = new BehaviorSubject<any>(null);
  searchResults$ = this.searchResults.asObservable();

  constructor(private http: HttpClient) {}

  getUsersByPage(pageNum: any): Observable<IAllUsersResponse> {
    return this.http.get<IAllUsersResponse>(
      `https://reqres.in/api/users?page=${pageNum}`
    );
  }

  getUser(id: number): Observable<IOneUserResponse> {
    return this.http.get<IOneUserResponse>(
      `https://reqres.in/api/users/${id}.`
    );
  }

  searchUser(id: number): void {
    this.http
      .get<any>(`https://reqres.in/api/users/${id}.`)
      .subscribe({
        next: (result) => {
          this.searchResults.next(result);
          console.log(result);
        },
      });
  }
}
