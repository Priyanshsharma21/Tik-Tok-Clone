import React from 'react'
import Ticker from 'react-ticker'

const Tickers = () => {
  return (
    <div>
     <Ticker>
        {({ }) => (
            <>
                <h1>This is the Headline of element #!</h1>
            </>
        )}
    </Ticker>
    </div>
  )
}

export default Tickers