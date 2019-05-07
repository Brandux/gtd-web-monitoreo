import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'gtd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userMenu = [{ title: 'Perfil', data: 'profile' }, { title: 'Cerrar Sesión', data: 'log-out' }];
  public user: any;
  constructor(
    private nbMenuService: NbMenuService,
    private themeService: NbThemeService,
  ) { }

  ngOnInit() {
    this.user = 'Brandux Juarez';
  }

}
