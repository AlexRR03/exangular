import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../../services/ServiceCubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public marcas !: Array<string>
  constructor(private _service:CubosService)
  {}
  ngOnInit(): void {
    this._service.getCubosMarcas().then(response=>{
      this.marcas = response
    })
  }

}
