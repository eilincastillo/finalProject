import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { InfoRepos } from './info-repos/info-repos.interface';
import { Repo } from './list-repos/repo.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'https://api.github.com/users';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': 'f5c565982ad8a770ecd9ec3f7a13f158139a6ac1'})
  }

  constructor(private http: HttpClient) { }

  handleError(error ){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code $(error.status)\nMessage: $(error.message)';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  //GET repo information
  getInfoRepo(): Observable<InfoRepos> {
    return this.http.get<InfoRepos>(this.apiURL + '/eilincastillo', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

    //GET repos list
    getListRepos(): Observable<Repo[]> {
      return this.http.get<Repo[]>(this.apiURL + '/eilincastillo/repos', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }

}
