import { Component, OnInit } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(
        public _listaDeseosService: ListaDeseosService,
        private _navCtrl: NavController
    ) { }

    ngOnInit(): void { }

    verDetalle (lista: any, idx: number) {
        this._navCtrl.push( DetalleComponent, {
            lista: lista,
            idx: idx
        } );
    }
}
