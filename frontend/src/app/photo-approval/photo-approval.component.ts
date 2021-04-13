import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-photo-approval',
  templateUrl: './photo-approval.component.html',
  styleUrls: ['./photo-approval.component.css']
})
export class PhotoApprovalComponent implements OnInit {

  public id: string;
  public photoSrc: any;
  private apiUrl: string;

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private router: Router, private sanitizer: DomSanitizer,
              private service: PhotoService) {
    this.apiUrl = "http://localhost:8080/photo-service/api/photos/";
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.apiUrl = this.apiUrl.concat(this.id);

    this.service.getPhotoById(this.id).subscribe(response => {
      this.photoSrc = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + response.data);
    }, responseError => {
      this.router.navigate(['**']);
      console.error('There was an error!', responseError);
    });
  }

  public ngAfterViewInit() {

  }

  ngOnDestroy() {
  }

}
