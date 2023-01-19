import { Component } from '@angular/core';
import { Album } from '../album';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

    albums!: Album[]


  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData('https://jsonplaceholder.typicode.com/albums')
    .subscribe(data => {
      // console.table(data);
      this.albums = data as Album[];
    })
  }

}
