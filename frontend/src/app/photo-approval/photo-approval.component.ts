import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {PhotoData} from "../photo";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-photo-approval',
  templateUrl: './photo-approval.component.html',
  styleUrls: ['./photo-approval.component.css']
})
export class PhotoApprovalComponent implements OnInit {

  public id: string;
  public photoSrc: any;
  private apiUrl: string;
  private updateSubscription: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private router: Router, private sanitizer: DomSanitizer) {
    this.apiUrl = "http://localhost:8080/photo-service/api/photos/";
  }

  public ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.apiUrl = this.apiUrl.concat(this.id);
    console.log(this.apiUrl);

    this.http.get(this.apiUrl)
      .subscribe((response: PhotoData) => {
        console.log("this.photoSrc before: " + this.photoSrc);
        this.photoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${response.data}`);
        console.log("this.photoSrc after: " + this.photoSrc);
      }, responseError => {
        this.router.navigate(['**']);
        console.error('There was an error!', responseError);
      });
  }

  public ngAfterViewInit() {
    console.log("this.photoSrc ngAfterViewInit: " + this.photoSrc);
  }

  ngOnDestroy() {
  }

}
