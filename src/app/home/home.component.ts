import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http} from '@angular/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // prevented = false
  private req:any;

  homeImageList = [
    // { image: "assets/images/nature/4.jpg", name:"Image 4", slug:"videos/video-1"},
    // { image: "assets/images/nature/5.jpg", name:"Image 5", slug:"videos/video-1"},
    // { image: "assets/images/nature/6.jpg", name:"Image 6", slug:"videos/video-1"},
  ]
  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
    this.req = this.http.get("assets/json/videos.json").subscribe(data=>{
      console.log(data.json())
      data.json().filter(item=>{
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
