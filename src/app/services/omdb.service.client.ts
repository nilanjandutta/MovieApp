
import { Injectable} from '@angular/core';
import { map } from "rxjs/operators";
import {HttpClient} from '@angular/common/http' ;
import {environment} from '../../environments/environment';


//injectable service into module

@Injectable()
export class OmdbService {
    constructor(private http : HttpClient)
    {

    }

    searchMovie(title: string)
    {
        const url ='http://www.omdbapi.com/?apikey=749e946a&s=' + title;
            return this.http.get(url).pipe(map(response => response)
            )
    }
}
