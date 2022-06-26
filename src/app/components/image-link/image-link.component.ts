import { Component, Input, Output } from '@angular/core'
import { ImageResolution } from '../../models/image-resolution.model';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.scss']
})
export class ImageLinkComponent {

  @Input() imageResolution: ImageResolution;
  @Input() imageUrl: string;

  constructor(public imageService: ImageService) { }

}
