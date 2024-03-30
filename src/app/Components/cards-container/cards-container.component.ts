import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { IUser } from 'src/app/Models/IUser';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
})
export class CardsContainerComponent implements OnInit, AfterViewInit {
  users: IUser[];
  user!: IUser;
  usersClone!: IUser[]; // to handle when the user stop using searching
  currentPage!: number;
  per_page!: number;
  total!: number;
  total_pages!: number;
  subs: Subscription[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isLoaded: boolean = false;

  constructor(private api: ApiService) {
    this.users = [];
    this.subs = [];
  }

  ngOnInit() {
    let sub = this.getUsers();
    this.subs.push(sub);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((event) => {
      this.currentPage = event.pageIndex; // Update current page
      this.isLoaded = false;
      this.getUsers();
      this.isLoaded = true;
    });

    this.api.searchResults$.subscribe((result) => {
      if (result !== null) {
      let userArr = [result.data];
      this.users = userArr;
      this.isLoaded = true;
      }
    });

    // this.shared.data$.subscribe((data: any) => {
    //   this.recievedData = data;
    //   console.log(this.recievedData);
  }

  getUsers() {
    let sub: Subscription;
    return sub = this.api.getUsersByPage(++this.currentPage).subscribe({
      next: (res) => {
        this.per_page = res.per_page;
        this.total = res.total;
        this.total_pages = res.total_pages;
        this.users = res.data;
        this.usersClone = res.data;
        this.isLoaded = true;
        this.subs.push(sub);
      },
      error: (err) => {
        console.error(err);
      },
    });


  }
}
