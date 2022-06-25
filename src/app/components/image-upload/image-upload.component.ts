import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../../services/image.service'

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private imageService: ImageService) {
    this.form = this.fb.group({
      image: [null, [Validators.required]],
    });
  }

  onUpload() {
    this.imageService.uploadImage(this.form.value.image);
  }
}
