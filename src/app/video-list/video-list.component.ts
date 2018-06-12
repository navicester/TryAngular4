import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  title = "someting"
  todayDate;
  // videoList= ["Item 1", "Item 2", "Item3"]
  videoList = [
    {
      name: 'Item 1',
      slug: 'item-1',
      embed: `XMzU5MjI4NTI3Mg`,
    },
    {
      name: 'Item 2',
      slug: 'item-2',
      embed: `XMzU5MjI4NTI3Mg`,
    },
    {
      name: 'Item 3',
      slug: 'item-3',
      embed: null,
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.todayDate = new Date()
  }

  getEmbedUrl(item){
    return 'http://player.youku.com/embed/' + item.embed + '=='
  }
}
