import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})
export class ListReposComponent implements OnInit {

  ReposList: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getListRepos();
  }

  getListRepos() {
    return this.api.getListRepos().subscribe((data) => {
      this.ReposList = data;
    });
  }

}
