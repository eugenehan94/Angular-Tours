import { Component } from '@angular/core';

/* Import the Service*/
import { MockDataService } from './mock-data.service';
import { Mock } from './mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tours';
  datas: Mock[] = []
  readMore: boolean = false;
  constructor(private mockData: MockDataService){
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.datas = this.mockData.getData();
    console.log("datas: ", this.datas)
  }

  toggleReadMore(): void {
    this.readMore = !this.readMore
  }

  filterOut (tourId: string): void {
    this.datas = this.datas.filter((item) => item.id !== tourId)
  }

  refresh():void {
    this.getData();
  }
}
