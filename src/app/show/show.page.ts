import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member:any=[];//ประกาศตัวแปร อาเรย์ เพื่อรับค่า

  constructor(private http:HttpClient,public dataapi:DataapiService,private nav:NavController) {
    this.loadDataMem();
   }

  ngOnInit() {
    this.loadDataMem();//เรียกใช้งานฟังก์ชันการดึงข้อมูล
  }

  loadDataMem(){
    this.dataapi.listmenber().subscribe({
      next: (res:any) => {
       console.log('Successfully',res);
       this.member = res;
      },
      error: (error) => {
        console.log('Error',error);
      }
    });
  }
  //ตัว
  edit(datamem:any){
    this.dataapi.data_dateilMen = datamem
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }

  delMem(id:any) {
    this.dataapi.delMember(id).subscribe({
      next: (res:any) => {
       console.log('Successfully',res);
       this.loadDataMem();
      },
      error: (error) => {
        console.log('Error',error);
      }
    });
  }

}
