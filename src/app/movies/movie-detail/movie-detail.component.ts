import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieDetails} from '../model/movie';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movieDetails: MovieDetails | undefined;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public getDetails(movieId: string) {
    this.moviesService
      .getMovieDetails(movieId)
      .subscribe(data => {
        this.movieDetails = data;
      });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>
      this.getDetails(params['id']),
    );
  }
}
