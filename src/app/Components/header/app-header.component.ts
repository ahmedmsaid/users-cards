import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit, AfterViewInit {
  data!: any;
  myControl: FormControl = new FormControl(this.data);

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.myControl.valueChanges
      .pipe(
        // Use valueChanges from the FormControl
        debounceTime(500)
      )
      .subscribe((userId) => {
        if (userId !== '' && userId !== '0') {
          this.api.searchUser(userId);
          console.log(userId);
        }
      });
  }

  ngAfterViewInit() {
    // this.sendData(+this.myControl.value);
    console.log(+this.myControl.value);
  }

  // sendData(data: any) {
  //   this.shared.setData(data);
  // }
}
