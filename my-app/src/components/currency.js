import React from 'react';

const CurrencyItem = ({ result }) => (
  <div>
    { result
      ? Object.keys(result).map((item, key) =>
          <div key={key}>
            { item }
            { result[item]['GBP'] }
          </div>
        )
      : <h2>Loading...</h2>}
  </div>
)

export default CurrencyItem;
