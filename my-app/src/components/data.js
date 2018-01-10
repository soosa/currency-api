let currencyPromise;

const CurrencyData = () => {
if (!currencyPromise){
	currencyPromise = fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XMR&tsyms=GBP')
    .then(result=>result.json());
}
return currencyPromise;
}

export default CurrencyData;