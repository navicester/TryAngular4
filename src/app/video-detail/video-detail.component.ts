import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Http } from '@angular/http';
import { VideoService } from '../videos/videos.service'

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]  
})
export class VideoDetailComponent implements OnInit, OnDestroy {

  private routeSub:any;
  private req:any

  // video = {
  //   name: 'Item 1',
  //   slug: 'item-1',
  //   embed: `95851db6%2Dd22f%2D4e32%2D8d7c%2Dc06a907f9457`,      
  // }
  video: any;
  slug:string;
  // constructor(private route: ActivatedRoute, private http:Http) { }
  constructor(private route: ActivatedRoute, private _video:VideoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      this.slug = params['slug']
      // this.req = this.http.get("assets/json/videos.json").subscribe(data=>{
      //   data.json().filter(item=>{
      //     if(item.slug == this.slug){
      //       this.video = item
      //     }   
      //   })             
      this.req = this._video.get(this.slug).subscribe(data=>{
        this.video = data
      })      
    }) 
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}
