import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class RegionsComponent implements OnInit {
  data: any;
  countryId: number;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.data = {};
    this.countryId = this.route.snapshot.params['country_id'];
    this.rest.listRegions(
      this.countryId
    ).subscribe((data: {}) => {
      console.log(data);
      this.data = data;
    });
  }

  selectCountry(countryId) {
    if (countryId !== 0) {
      this.router.navigate(['/' + countryId]);
    } else {
      this.router.navigate(['/']);
    }
  }

  selectRegion(regionId) {
    if (regionId !== 0) {
      this.router.navigate(['/' + this.countryId + '/' + regionId]);
    }
  }
}
