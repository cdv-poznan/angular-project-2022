export interface Movie {
  id: string;
  image: string;
  title: string;
  description: string;
}

export type MovieResults = {
  results: Movie[];
};

export type MovieDetails = {
  image: string;
  fullTitle: string;
  awards: string;
  directors: string;
  plot: string;
  genres: string;
  imDbRating: string;
  starList: StarsList[];
};

export type StarsList = {
  name: string;
};
