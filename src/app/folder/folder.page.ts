import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderService } from './folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  ip = '192.168.1.1';
  seen = 22;
  ips: any = [];
  constructor(private activatedRoute: ActivatedRoute, private folderService: FolderService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllData();
  }
getAllData(){
    this.folderService.getData().subscribe(response=> {
      this.ips = response;
    });
}
}
