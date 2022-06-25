import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(private http: HttpClient) {}

  public uploadImage(file: File): Observable<Object> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post('https://localhost:49165/Image', formData);
  }
}
