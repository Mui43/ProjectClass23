import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  //ประกาศตัวแปรแบบ อาเรย์ เพื่อรับค่า/show ข้อมูล
  data_dateilMen: any=[];

  constructor(public http: HttpClient) {

   }

   // ฟังก์ชันการเพิ่มที่ส่งไป api

   addmembers(data:any){
    console.log("ค่ามาจากแอป" , data);
    return this.http.post('http://127.0.0.1/api/insert.php', data);
   }
   //สร้างขึ้นมาเพื่อดึงข้อมูลมาจาก api
   listmenber(){
    return this.http.get('http://127.0.0.1/api/listmember.php');
   }

   //ฟังก์ชันการแก้ไขข้อมูลที่ส่งไป api
   editmembers(dataEdit:any){
    return this.http.put('http://127.0.0.1/api/update.php', dataEdit);
   }

   delMember(id:any){
    return this.http.delete('http://127.0.0.1/api/delete.php?id='+id);
  }
}
