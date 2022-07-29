import { Component, OnInit } from '@angular/core';
import{SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen=true;
  constructor(private service:SharedService) {

   }

  OpportinitiesList:any=[];
  ngOnInit(): void {
    this.refreshOppList();
  }
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
  refreshOppList(){
    this.service.opportunities().subscribe(data=>{
      this.OpportinitiesList=data;
    });
  }

}
