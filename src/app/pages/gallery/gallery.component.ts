import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { Photo } from '../../models/photo';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  photoTest=new Photo();
  photoList!:Photo[];

  constructor(private galleryService:GalleryService){

  }

  ngOnInit(): void {
    this.photoTest.url="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg";
    this.galleryService.getPhotos().subscribe({
      next:(data) => {
        this.photoList=data;
        console.log(this.photoList);
      }
    })
  }

}
