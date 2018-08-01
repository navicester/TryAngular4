import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

const endpoint = 'assets/json/videos.json' //http://www.youdomain.com/api/videos

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:Http) { }

  list(){
      return this.http.get(endpoint)
      // .map(response=>response.json())
      // .catch(this.handleError)
      .pipe(
           map(response=>response.json()), 
           catchError(this.handleError))
  }

  get(slug){
      return this.http.get(endpoint).pipe(
        map(response=>{
          let data = response.json().filter(item=>{
            if (item.slug == slug) {
              return item
            }
          })
          if (data.length == 1){
            return data[0]
          }
          return {}
        }),
        catchError(this.handleError)
      )
   }

  search(query){
    return this.http.get(endpoint)
    .pipe(
      map(response=>{
          let data = []
          let req = response.json().filter(item=>{
            if (item.name.indexOf(query) >=0) {
                 data.push(item)
            }
          })
          return data
       }),
      catchError(this.handleError)
      )
  }

  private handleError(error:any, caught:any):any{
      console.log("handleError")
      console.log(error, caught)
  }
}
