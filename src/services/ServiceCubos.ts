import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment'

@Injectable()
export class CubosService {

  private apiUrl = environment.urlApiCubos; // Reemplaza esto con la URL base de tu API

  constructor() { }

  getCubos(): Promise<any> {
    const request = 'api/cubos';
    const url = `${this.apiUrl}${request}`;
    return axios.get(url)
    
  }

  getComentariosCubo(id: number): Promise<any> {
    const request = `api/comentarioscubo/getcomentarioscubo/${id}`;
    const url = `${this.apiUrl}${request}`;
    return axios.get(url)
  }

  getCubosMarcas(): Promise<any> {
    const request = 'api/cubos/marcas';
    const url = `${this.apiUrl}${request}`;
    
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          console.log(response);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getCubosByMarca(nombre: string): Promise<any> {
    const request = `api/cubos/cubosmarca/${nombre}`;
    const url = `${this.apiUrl}${request}`;
    
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  sendUsuario(usuario: any): Promise<any> {
    const request = 'api/manage/login';
    const url = `${this.apiUrl}${request}`;
    
    return new Promise((resolve, reject) => {
      axios.post(url, usuario, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  getPerfil(): Promise<any> {
    const token = localStorage.getItem('authToken');
    const request = '/api/Manage/PerfilUsuario';
    const url = `${this.apiUrl}${request}`;
    
    return new Promise((resolve, reject) => {
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  getCarrito(): Promise<any> {
    const token = localStorage.getItem('authToken');
    const request = '/api/compra/comprasusuario';
    const url = `${this.apiUrl}${request}`;
    
    return new Promise((resolve, reject) => {
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  comprar(id: number): Promise<any> {
    const token = localStorage.getItem('authToken');
    const request = `/api/Compra/InsertarPedido/${id}`;
    const url = `${this.apiUrl}${request}`;
    
    return new Promise((resolve, reject) => {
      axios.post(url, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}