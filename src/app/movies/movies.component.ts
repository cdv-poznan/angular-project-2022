import {Component} from '@angular/core';
import {Movie} from './model/movie';
import {MoviesService} from './services/movies.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  public movies: Movie[] = [];
  totalPages: number = 0;
  perPage: number = 1;
  public paginatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  public getMoviesList(searchTerm: any) {
    this.moviesService
      .getMovies(searchTerm)
      .subscribe(data => {
        this.movies = data.results;
        this.totalPages = data.results.length;
        this.calculatePaginatedMovies(0, this.perPage);
      });
  }

  onPageChange(event: PageEvent) {
    this.calculatePaginatedMovies(
      event.pageIndex,
      this.perPage,
    );
  }

  calculatePaginatedMovies(
    currentPage: number,
    perPage: number,
  ): void {
    const start = currentPage * perPage;
    const end = (currentPage + 1) * perPage;
    this.paginatedMovies = this.movies.slice(start, end);
  }
}
