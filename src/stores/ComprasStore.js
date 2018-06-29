
import {observable, action} from 'mobx';

export default class ComprasStore {

    @observable compras = [];

    @action adicionarItemCarrinho(item){

        this.compras.push(item)

    }

    @action removerItemCarrinho(item){

        let filtredCompras = this.compras.filter(data => data.nome !== item.nome);
        this.compras.replace(filtredCompras);
    }

}
