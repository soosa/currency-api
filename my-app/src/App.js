import React from 'react';
import CurrencyItem from './components/currency';
import CurrencyData from './components/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    CurrencyData().then(items => this.setState({ items }));
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Super Coin Watcher</h1>
        </header>
        <CurrencyItem result={this.state.items}/>
      </div>
    )
  }
}

export default App;