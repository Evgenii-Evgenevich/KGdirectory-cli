import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class TerritoriesComponent implements OnInit {
  data: any;
  countryId: number;
  regionId: number;
  districtId: number;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.data = {};
    this.countryId = this.route.snapshot.params['country_id'];
    this.regionId = this.route.snapshot.params['region_id'];
    this.districtId = this.route.snapshot.params['district_id'];
    this.rest.listTerritories(
      this.countryId,
      this.regionId,
      this.districtId
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
    } else {
      this.router.navigate(['/' + this.countryId]);
    }
  }

  selectDistrict(districtId) {
    if (districtId !== 0) {
      this.router.navigate(['/' + this.countryId + '/' + this.regionId + '/' + districtId]);
    } else {
      this.router.navigate(['/' + this.countryId + '/' + this.regionId]);
    }
  }

  selectTerritory(territoryId) {
    if (territoryId !== 0) {
      this.router.navigate(['/' + this.countryId + '/' + this.regionId + '/' + this.districtId + '/' + territoryId]);
    }
  }
}
