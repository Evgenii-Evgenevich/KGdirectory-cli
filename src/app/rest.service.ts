import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    return res || { };
  }

  listCountries(): Observable<any> {
    return this.http.get(endpoint)
      .pipe(map(this.extractData));
  }

  listRegions(countryId): Observable<any> {
    return this.http.get(endpoint + countryId)
      .pipe(map(this.extractData));
  }

  listDistricts(countryId, regionId): Observable<any> {
    return this.http.get(endpoint + countryId + '/' + regionId)
      .pipe(map(this.extractData));
  }

  listTerritories(countryId, regionId, districtId): Observable<any> {
    return this.http.get(endpoint + countryId + '/' + regionId + '/' + districtId)
      .pipe(map(this.extractData));
  }

  listLocalities(countryId, regionId, districtId, territoryId): Observable<any> {
    return this.http.get(endpoint + countryId + '/' + regionId + '/' + districtId + '/' + territoryId)
      .pipe(map(this.extractData));
  }

  locality(countryId, regionId, districtId, territoryId, localityId): Observable<any> {
    return this.http.get(endpoint + countryId + '/' + regionId + '/' + districtId + '/' + territoryId + '/' + localityId)
      .pipe(map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
