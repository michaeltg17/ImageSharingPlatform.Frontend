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
    //This url (the domain part) should be in environment settings or outside source control
    return this.http.post<ImageGroup>('https://localhost:49163/Image', formData);
  }
}
