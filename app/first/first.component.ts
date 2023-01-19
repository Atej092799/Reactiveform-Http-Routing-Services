import { Component } from '@angular/core';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Post } from '../post';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
    posts!: Post[]

  constructor(private httpService: HttpService){}
  
  ngOnInit(){
    // console.log('firstcomponent')
    this.httpService.getData('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      // console.table(data);
      
      // data as Post gi type cast para way error
      this.posts = data as Post[];
    })


  }

}
