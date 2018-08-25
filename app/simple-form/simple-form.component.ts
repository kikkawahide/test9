import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  result:string="足し算です";
  text1:string="50";
  text2:string="100";
  addAndShow():void{
    this.result="これはTEST" + this.text1 + this.text2;
    let forresult:string="正しい値を入力してください" ;
    let int1:number;
    let int2:number;
    int1=Number(this.text1);
    int2=Number(this.text2);
     // NaN (Not a Number,数値でなければ)
    if (!Number.isNaN(int1) && !Number.isNaN(int2)  ){
      forresult=`${int1}+${int2}=${int1+int2}`;
    }
    // this.result="これはTEST" + this.text1 + this.text2;
    this.result="これはTEST" + forresult;
   
}


  constructor() { }

  ngOnInit() {
  }
  

}
