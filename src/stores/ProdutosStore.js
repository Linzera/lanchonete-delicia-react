import { observable, computed, action } from 'mobx';

const link = "https://content.paodeacucar.com/wp-content/uploads/2017/01/frutas-sazonais-1500x1000.jpg";

export default class ProdutosStore{

    @observable produtos = [
        {
            nome: 'Suco de maracujá',
            preco: 3.50,
            img: link
        },
        {
            nome: 'Suco de cajá',
            preco: 3.50,
            img: link
        },
        {
            nome: 'Suco de pesego',
            preco: 3.50,
            img: link
        },
        {
            nome: 'Suco de laranja',
            preco: 3.50,
            img: link
        }
    ]

    @action getProdutos(){

        return this.produtos;

    }

    @action adicionarProduto(nomeProduto,precoProduto){

        this.produtos.push({
            nome: nomeProduto,
            preco: precoProduto
        })

    }

}