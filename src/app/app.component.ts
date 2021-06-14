import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  websiteList: any = ['Birth Certificate', 'Previous Class Marksheet', 'Aadhaar Card','Conduct Certicate','Transfer Certificate']
  FileList: any= ['.pdf','.jpg/.jpeg','.rar','.zip']
  form = new FormGroup({
    website: new FormControl('', Validators.required),
    filelist: new FormControl('', Validators.required)
  });
  ngOnInit(){
    this.dataArray.push(this.home);

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.dataArray);
  }

  
  addRow(){
    
    this.home=new home();
    this.dataArray.push(this.home);
  }

  remove(index:any){
    this.dataArray.splice(index,1);

  }
}