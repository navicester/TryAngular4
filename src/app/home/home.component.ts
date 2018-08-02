import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http} from '@angular/http'
import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // prevented = false
  private req:any;

  homeImageList:[VideoItem] = [] as [VideoItem]
  videoListDefaultImage = "assets/images/videos/1.jpg"
  constructor(private http:Http, private router:Router, private _video:VideoService) { }

  ngOnInit() {
    this.req = this._video.list().subscribe(data=>{
      console.log(data)
      data.filter(item=>{
        if(item.featured){
          this.homeImageList.push(item)
        }
      })
      // this.homeImageList = data.json();
    })    
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

  preventNormal(event:MouseEvent, image:any){
      if(!image.prevented){
        console.log(image)
        event.preventDefault()
        // console.log(image.getAttribute("href"))
        // image.setAttribute("href", "/videos")
        // image.link = "/videos"
        // image.prevented = true
        this.router.navigate(["./videos"])
      }
      // alert("working ...")
  }

}
