import { isNgTemplate } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  data = [
    { id: 1, exampleInputEmail1: 'namok', exampleInputPassword1:'pppp'},
    { id: 2, exampleInputEmail1: 'okokokok', exampleInputPassword1:'pppp'},
  ];

  dataExampleInputEmail1: any
  dataExampleInputPassword1: any

  constructor() { }

  ngOnInit(): void {
  }

  dataList: any
  onSubmit(value: any){
    this.dataList = this.data.push({...value.value, id: this.data.length + 1})
    this.dataExampleInputEmail1= '';
    this.dataExampleInputPassword1= ''
  }

  ondelete(value: any){
    this.data = this.data.filter((item) => item.id !== value);
  }



  onEdit(value: any){
  console.log('edit', value)
  this.dataList = this.data.filter((item)=> item.id === value.id)
  this.dataExampleInputEmail1 = this.dataList.map((item: any)=>{
    return item.exampleInputEmail1
  })
  this.dataExampleInputPassword1 = this.dataList.map((item: any)=>{
    return item.exampleInputPassword1
  })
  }
 
}
