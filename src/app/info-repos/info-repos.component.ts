import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-info-repos',
  templateUrl: './info-repos.component.html',
  styleUrls: ['./info-repos.component.css']
})
export class InfoReposComponent implements OnInit {

  InfoRepos: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    return this.api.getInfoRepo().subscribe((data) => {
      this.InfoRepos = data;
      console.log('data');
      console.log(this.InfoRepos.login);
    });
  }

}
