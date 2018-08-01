import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [VideoService]  
})

export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub:any;
  query: string;
  private req: any;
  videoList: [VideoItem];


  constructor(private route: ActivatedRoute, private _video:VideoService) { }

  ngOnInit() {
      this.routeSub = this.route.params.subscribe(params=>{
          // console.log(params)
          this.query = params['q']
          this.req = this._video.search(this.query).subscribe(data=>{
              this.videoList = data as [VideoItem];
              console.log(this.videoList)
          })

      })
  }

  ngOnDestroy() {
      this.routeSub.unsubscribe()
      this.req.unsubscribe()      
  }

  getEmbedUrl(item){
    return 'https://nokia.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=1b8cfb68%2D329c%2D45db%2D836c%2D0e3926661633&vId=' + item.embed + '&width=640&height=360&autoPlay=false&showInfo=true'    
  }

}
