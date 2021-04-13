import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  title = 'Photo-Service';

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('photo')
  public photo: ElementRef;

  private apiUrl: string;

  public constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = "http://localhost:8080/photo-service/api/upload"
  }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
        });
    }
  }

  public capture() {
    this.photo.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);

    this.photo.nativeElement.toBlob((blob) => {
      let formData = new FormData();
      formData.append('photo', blob);

      this.http.post(this.apiUrl, formData).subscribe({
        next: (data: PhotoData) => {
          console.log(data);
          const photoId = data ? data.id : 0;
          this.router.navigate(['/photo-approval', photoId]);
        },
        error: error => {
          console.error("There was an error!", error);
        }
      });

    });

  }

}

export interface PhotoData {
  id: bigint;
  photo: any;
  data: any;
}
