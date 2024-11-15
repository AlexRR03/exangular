import { Component } from '@angular/core';
import { CubosService } from '../../../services/ServiceCubos';
import { Cubo } from '../../../models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public cubos !: Array<Cubo>
  constructor(private _service:CubosService)
  {
    this.cubos = []
  }
  loadCubos():void{
    this._service.getCubos().then(response=>{
      this.cubos = response.data
      console.log(this.cubos)
    })
  }
  ngOnInit(): void {
    this.loadCubos()
  }
}
