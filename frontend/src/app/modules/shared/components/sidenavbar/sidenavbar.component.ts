import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {

  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}





