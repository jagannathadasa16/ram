import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe'
})
export class AccessPipe implements PipeTransform {
  constructor(){};
 accessTypeId = 1;
 isReadable! : boolean;
  transform(accessTypeId: any): any {
    if(this.accessTypeId == 1){
      this.isReadable = true;
    } else {
      this.isReadable = false;
    }
    return accessTypeId;
  }

}

@Component({
  selector: 'app-kirtan-lesson',
  templateUrl: './kirtan-lesson.component.html',
  styleUrls: ['./kirtan-lesson.component.css']
})
export class KirtanLessonComponent implements OnInit {
  clor = 'green'
ids=["AuT3rfQP8DA", "DsNwFkcgPIA", "TGPrC1phnFQ", "QnQaxdxWPso", "MuKCtgzmImc", "rhRpr1mNLMI"];
lessons:any;
playerVars ={
  cc_lang_pref:"en"
}
player:any;
dateToday: string = '';
  name: string = "";
  num: number = 84987345.974;
  constructor(private httpClient:HttpClient) { }
   birthday = new Date("November 14, 1988 03:24:00");
  ngOnInit(): void {
    this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=karatal').subscribe(res=>{
  this.lessons = res;
    this.dateToday = new Date().toDateString();
    this.name = "hare krishna";

  })
  }
savePlayer(player:any){
this.player = player;
}
playVideo(){
this.player.playVideo();
}
pauseVideo(){
this.player.pauseVideo();
}
}
