import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codeforinterview',
  templateUrl: './codeforinterview.component.html',
  styleUrls: ['./codeforinterview.component.scss']
})
export class CodeforinterviewComponent implements OnInit {

  banner = "/assets/images/banner.jpg";
  youtubefront = "/assets/images/youtube_1.png";
  javaproject = "/assets/images/youtube_4.png";
  amcatseries = "/assets/images/youtube_5.png";
  cocubesseries = "/assets/images/youtube_6.png";
  allvideos = "/assets/images/youtube_2.png";
  instagram = "/assets/images/instagram_1.png";
  

  constructor() { }

  ngOnInit() {
  }

}
