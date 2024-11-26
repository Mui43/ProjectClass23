import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

//ประกาศตัวแปรเพื่อรับค่าจากหน้า home.page.html
  datamembers:any = {};

  txtid_stu:any;
  txtname:any;
  txtnname:any;
  txtage:any;
  txtphone:any;
  txtaddress:any;
  txtstatus:any;

//ตัวแปลที่ส่งไปยัง api

  constructor(public dataapi : DataapiService , private route:Router) {}

//ฟังก์ชันสำหรับเพื่มข้อมูล
  addmembers(){
    let data = {
    id_stu:this.txtid_stu,
    name:this.txtname,
    nname:this.txtnname,
    age:this.txtage,
    phoen:this.txtphone,
    address:this.txtaddress,
    status:this.txtstatus
  }

  this.dataapi.addmembers(data).subscribe({
    next:(res:any) =>{
      console.log("ข้อมูลถูกเพิ่ม" , res);
      this.route.navigateByUrl('/show');
    },
    error:(err:any) => {
      console.log("ข้อมูลไม่ถูกเพิ่ม", err);
    }
  });
  this.clearForm();
  }

  //ฟังก์ชันล้างข้อมูล
  clearForm(){
    this.txtid_stu = '';
    this.txtname = '';
    this.txtnname = '';
    this.txtage = '';
    this.txtphone = '';
    this.txtaddress = '';
    this.txtstatus = '';
  }
  showdata(){
    this.route.navigate(['/show']);
  }
}
