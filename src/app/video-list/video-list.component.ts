import { Component, OnInit, OnDestroy } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser'
// import { Http } from '@angular/http';
import { VideoService } from '../videos/videos.service'

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit {

  private req:any
  title = "video list"
  // todayDate;
  // videoList= ["Item 1", "Item 2", "Item3"]
  videoList : [any];
  // videoList = [
  //   {
  //     name: 'Item 1',
  //     slug: 'item-1',
  //     // embed: `XMzU5MjI4NTI3Mg`,
  //     embed: `95851db6%2Dd22f%2D4e32%2D8d7c%2Dc06a907f9457`,      
  //   },
  //   {
  //     name: 'Item 2',
  //     slug: 'item-2',
  //     // embed: `XMzU5MjI4NTI3Mg`,
  //     embed: `10d528b2%2Ddc88%2D4ad5%2D8bb5%2D7aceff22c5ef`,
  //   },
  //   {
  //     name: 'Item 3',
  //     slug: 'item-3',
  //     embed: null,
  //   }
  // ]

  // constructor(private http:Http) { }
  constructor(private _video:VideoService) { }
  // constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.todayDate = new Date()
    // this.req = this.http.get("assets/json/videos.json").subscribe(data=>{
    //   console.log(data.json())
    //   this.videoList = data.json() as [any];
    this.req = this._video.list().subscribe(data=>{
      console.log(data)
      this.videoList = data as [any];
    })    
  }

  ngOnDestory(){
    this.req.unsubscribe()
  }

  getEmbedUrl(item){
    // return 'http://player.youku.com/embed/' + item.embed + '=='
    return 'https://nokia.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=1b8cfb68%2D329c%2D45db%2D836c%2D0e3926661633&vId=' + item.embed + '&width=640&height=360&autoPlay=false&showInfo=true'    
  }
}
