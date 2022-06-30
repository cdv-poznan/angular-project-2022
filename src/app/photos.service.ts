import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  urls: {
    regular: string; 

  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

getPhoto() {
  return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
    headers: {
      Authorisation: 'Client-ID uK4psn4Cf_2_3Cqi7VW3ffLiycJBnFjZmxQWT0LY5Q4'
    }
  })
}

}
