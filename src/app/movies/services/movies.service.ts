import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

import {MovieDetails, MovieResults} from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getMovies(
    searchTerm: string,
  ): Observable<MovieResults> {
    return this.http.get<MovieResults>(
      `https://imdb-api.com/en/API/SearchMovie/k_pgd93xda/${searchTerm}/`,
    );
  }

  public getMovieDetails(
    movieId: string,
  ): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `https://imdb-api.com/en/API/Title/k_pgd93xda/${movieId}/`,
    );
  }
}
