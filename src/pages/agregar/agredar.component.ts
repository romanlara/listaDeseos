import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
    nombreLista: string = '';
    nombreItem: string = '';

    items: ListaItem[] = [];

    constructor(
        public alertCtrl: AlertController,
        public _navCtrl: NavController,
        public _deseosService: ListaDeseosService
    ) { }

    ngOnInit(): void { }

    agregar () {
        if ( this.nombreItem.length == 0 ) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push( item );
        this.nombreItem = '';
    }

    borrarItem (index: number) {
        this.items.splice(index, 1);
    }

    guardarLista () {
        if ( this.nombreLista.length == 0 ) {
            const alert = this.alertCtrl.create({
                title: 'Nombre de la Lista!',
                subTitle: 'El nombre de la lista es necesario!',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let lista = new Lista( this.nombreLista );
        lista.items = this.items;

        // this._deseosService.listas.push( lista );
        this._deseosService.agregarLista( lista );
        this._navCtrl.pop();
    }
}
