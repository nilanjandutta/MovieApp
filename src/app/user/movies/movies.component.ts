import { OmdbService } from './../../services/omdb.service.client';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title : string;

  movies : any[];
  @ViewChild('f') searchForm: NgForm;

  constructor(private omdbService: OmdbService) { }

  ngOnInit(): void {
  }
  search()
  {
    //getting user input
    this.title = this.searchForm.value.title;
  
    //calling searchMovie in omdb client service
    this.omdbService.searchMovie(this.title).subscribe(
      (data: any)=> {
        this.movies = data.Search;
        console.log(this.movies);
      }

    )

  }

}
