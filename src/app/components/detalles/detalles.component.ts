import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../../services/ServiceCubos';
import { Comentario } from '../../../models/comentario';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{
  public comentarios !: Array<Comentario>
  constructor(private _service:CubosService, private _activateRouter: ActivatedRoute)
  {}
  ngOnInit():void{
    this._activateRouter.params.subscribe((params:Params)=>{
    let id = parseInt(params["id"])
    this._service.getComentariosCubo(id).then(response=>{
      this.comentarios = response.data
      console.log(this.comentarios)
    })
  })}
 
}
