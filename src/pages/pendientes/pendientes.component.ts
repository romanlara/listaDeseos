import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

// Para cambiar de pantlla
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agredar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {
    
    constructor(
        public _listaDeseosService: ListaDeseosService,
        private _navCtrl: NavController
    ) { }

    ngOnInit(): void { }

    irAgregar () {
        this._navCtrl.push( AgregarComponent );
    }

    verDetalle (lista: any, idx: number) {
        this._navCtrl.push( DetalleComponent, {
            lista: lista,
            idx: idx
        } );
    }
}
