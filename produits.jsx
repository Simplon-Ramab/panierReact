class Panier extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      Panier (0)
      </div>
    );
  }
}
class Produit extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>

      <h3>{this.props.product.nom}</h3>
      <img src={this.props.product.image} />
      <p>{this.props.product.desc}</p>
      <h3>{this.props.product.prixHT}</h3>
      <button className="btn btn-primary">-</button>
      <button className="btn btn-danger">+</button>
      <span>(0)</span>
    </div>
    );
  }
}

class Catalogue extends React.Component {

  constructor() {
    super();
  }
  render() {
    var rows = this.props.products.map(function(product){
      return (<Produit
              product={product}
              />
             );
    });
    return (
      <div className="row" >
        {rows}
      </div>
    );
  }
}

class Boutique extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-8">
                  <h2>Produits</h2>
        <Catalogue
          products={this.props.products}
        />
    </div>
    <div className="col-md-4">
      <Panier />
      </div>
    </div>
    );
  }
}
var PRODUCTS = [
  {image: 'http://bi2.cdscdn.com/GoSport/pdt2/9/8/7/1/200x200/mpgs2138987/rw/chaussettes-candy-cane-sock-dk-vlt-x2.jpg', prixHT: '9€', nom: 'Chaussettes'},
  {image: 'https://www.modemarine.fr/upload/site0046modemarine/rubriques/rubrique-pulls-col-v-homme.jpg', prixHT: '39€', nom: 'Pull'},
  {image: 'https://www.modemarine.fr/upload/site0046modemarine/rubriques/rubrique-pantalon-homme.jpg', prixHT: '79€', nom: 'Pantalon'},
  {image: 'http://crossxwod.com/c/13-tm_home_default/t-shirts-debardeurs.jpg', prixHT: '19€', nom: 'T-shirt'},
];

ReactDOM.render(
  <Boutique products={PRODUCTS}  />,
  document.getElementById('container')
);
