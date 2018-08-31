import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CountriesComponent } from './countriesComponent/component';
import { RegionsComponent } from './regionsComponent/component';
import { DistrictsComponent } from './disctictsComponent/component';
import { TerritoriesComponent } from './territoriesComponent/component';
import { LocalitiesComponent } from './localitiesComponent/component';
import { CurLocalityComponent } from './curLocalityComponent/component';

const appRoutes: Routes = [
  {
    path: '/',
    component: CountriesComponent,
  },
  {
    path: '/:country_id',
    component: RegionsComponent,
  },
  {
    path: '/:country_id/:region_id',
    component: DistrictsComponent,
  },
  {
    path: '/:country_id/:region_id/:district_id',
    component: TerritoriesComponent,
  },
  {
    path: '/:country_id/:region_id/:district_id/:territory_id',
    component: LocalitiesComponent,
  },
  {
    path: '/:country_id/:region_id/:district_id/:territory_id/:locality_id',
    component: CurLocalityComponent,
  },
];

@NgModule({
  declarations: [
    CountriesComponent,
    RegionsComponent,
    DistrictsComponent,
    TerritoriesComponent,
    LocalitiesComponent,
    CurLocalityComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule {
}
