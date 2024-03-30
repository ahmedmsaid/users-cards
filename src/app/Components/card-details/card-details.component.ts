import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/Models/IUser';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  user!: IUser;
  id!: number;
  subs!: Subscription[];
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { 
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let sub = this.api.getUser(this.id).subscribe({
      next: (res) => {
        this.user = res.data;
        console.log(this.user)
      },
      error: (err) => {
        console.error(err);
        this.router.navigate(['**']);
      }
    })
    
    this.subs.push(sub);
  }

  navigateHome():void {
    this.router.navigate(['/users']);
  }

}
