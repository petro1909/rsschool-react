import React from 'react';
import { Product } from '../../types/product';
import './card.css';
type Props = {
  item: Product;
};

export default class Card extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <section className="product-wrapper">
        <div className="product">
          <div
            className="product__picture-wrapper"
            style={{ backgroundImage: `url("${this.props.item.thumbnail}")` }}
          ></div>
          <div className="product__description">
            <h3 className="product__title">{this.props.item.title}</h3>
            <p className="product__brand">{this.props.item.brand}</p>
            <p className="product__cartegory">{this.props.item.category}</p>
            <p className="product__price">price - {this.props.item.price}€</p>
          </div>
        </div>
      </section>
    );
  }
}
