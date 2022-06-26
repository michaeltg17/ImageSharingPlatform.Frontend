import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { ImageGroup } from '../models/image-group.model';
import { ImageResolution } from '../models/image-resolution.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  public imageResolutions: { [key in ImageResolution] : string } = {
    [ImageResolution.Avatar]: "Avatar",
    [ImageResolution.OriginalSize]: "OriginalSize",
    [ImageResolution.FullHd]: "FullHd",
    [ImageResolution.Hd]: "Hd"
  };

  constructor(private http: HttpClient) {}

  public uploadImage(file: File): Observable<ImageGroup> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ImageGroup>('https://localhost:49165/Image', formData);
  }
}
