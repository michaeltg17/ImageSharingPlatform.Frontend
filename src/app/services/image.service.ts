import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(private http: HttpClient) {}

  public uploadImage(image: File): Observable<object> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('https://localhost:49161/Image', formData);
  }
}
