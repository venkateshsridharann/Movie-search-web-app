import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})
export class DataserviceService {
  data :any = [];
  latest :any = [];
  movie_data : any = [];
  searchquery='';
  plot='';
  type='';
  year:any;
  page:any;
  data_response :any;
  constructor(private http: HttpClient) { }

  strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  search(){
    this.http.get<any[]>(`http://omdbapi.com/?s=${this.strip(this.searchquery)}&y=${this.year}&type=${this.type}&apikey=thewdb`)
    .subscribe(data=> {
      this.data_response = (data as any).Response
      if ((data as any).Response == "True")
      {
        this.data = (data as any).Search;
      }
      else{
        this.data = (data as any).Error;
      }
      console.log(this.data);
      // console.log(`http://omdbapi.com/?s=${this.searchquery}&y=${this.year}&type=${this.type}&apikey=thewdb`)
    })
  }
  
  randompage(){
    this.page = Math.ceil(Math.random()*8)
    console.log("page is" + this.page)
  }

  getlatest(){
    this.http.get<any[]>(`http://omdbapi.com/?s=new&y=2018&page=${this.page}&apikey=thewdb`)
    .subscribe(data=> {
      this.latest = (data as any).Search;
      // console.log(`http://omdbapi.com/?s=${this.searchquery}&y=${this.year}&type=${this.type}&apikey=thewdb`)
    })
  }

  print(){
    console.log(this.movie_data)
  }

  movieDetails(imdbID){
    console.log(imdbID)
    this.http.get<any[]>(`http://www.omdbapi.com/?i=${imdbID}&plot=${this.plot}&apikey=thewdb`)
    .subscribe(data=> {
      this.movie_data = data;
      console.log(this.movie_data);
    })
  }
}
