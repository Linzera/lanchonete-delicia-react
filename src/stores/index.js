import ComprasStore from './ComprasStore';
import ProdutosStore from './ProdutosStore';

const produtosStore = new ProdutosStore();
const comprasStore = new ComprasStore();

export default {
    comprasStore: comprasStore,
    produtosStore: produtosStore
};
