import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CountriesComponent implements OnInit {
  data: any;
  value: number;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.data = {};
    this.value = 0;
    this.rest.listCountries().subscribe((data: {}) => {
      console.log(data);
      this.data = data;
    });
  }

  selectCountry(value) {
    this.value = value;
    if (value !== 0) {
      this.router.navigate(['/' + value]);
    }
  }
}
