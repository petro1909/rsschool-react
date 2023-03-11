import React from 'react';
import getFetchJson from '../../service/fetchService';
import { Product, ProductJsonResult } from '../../types/product';
import Card from '../card/card';
import './cards.css';
type Props = {
  value?: string;
};
type CardsState = {
  cards: Product[];
};

export default class Cards extends React.Component<Props, CardsState> {
  constructor(props: Props) {
    super(props);
    this.state = { cards: [] };
  }
  async componentDidMount(): Promise<void> {
    const fetchedProducts = (await getFetchJson('https://dummyjson.com/products?limit=20')) as ProductJsonResult | null;
    if (!fetchedProducts) {
      this.setState({ cards: [] });
    } else {
      this.setState({ cards: fetchedProducts.products });
    }
  }

  render() {
    return (
      <section className="cards-wrapper">
        {this.state.cards.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </section>
    );
  }
}
