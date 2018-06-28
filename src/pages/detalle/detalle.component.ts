import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaItem } from '../../app/classes/lista-item';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
    idx: number;
    lista: any;

    constructor(
        private _navCtrl: NavController,
        private _navParams: NavParams,
        private _deseosService: ListaDeseosService,
        public _alertCtrl: AlertController
    ) {
        this.idx = this._navParams.get( 'idx' );
        this.lista = this._navParams.get( 'lista' );
    }

    ngOnInit(): void { }

    actualizar ( item: ListaItem ) {
        item.completado = !item.completado;

        let todosMarcados = true;
        for ( let item of this.lista.items ) {
            if ( !item.completado ) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminada = todosMarcados;

        this._deseosService.actualizarData();
    }

    borrarItems () {
        const confirm = this._alertCtrl.create({
            title: `Borrar ${ this.lista.nombre }`,
            message: 'Estás seguro que quieres borrar la lista?',
            buttons: [
              'No',
              {
                text: 'Sí',
                handler: () => {
                  this._deseosService.eliminarLista( this.idx );
                  this._navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
    }
}
