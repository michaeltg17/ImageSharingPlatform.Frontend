import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../../services/image.service'
import { FileInput } from 'ngx-material-file-input';
import { ImageGroup } from '../../models/image-group.model';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  form: FormGroup;
  isImageUplodaded: boolean;
  imageGroup: ImageGroup;

  constructor(private fb: FormBuilder, public imageService: ImageService) {
    this.form = this.fb.group({
      image: [null, [Validators.required]],
    });
  }

  async onUpload() {
    const file_form: FileInput = this.form.get('image')?.value;
    const file = file_form.files[0]; // in case user didn't selected multiple files
    this.imageGroup = await this.imageService.uploadImage(file).toPromise()
    this.isImageUplodaded = true
  }
}
