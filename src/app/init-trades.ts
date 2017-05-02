export class Init{
    load(){
        console.log(localStorage.getItem('trades'));
        if(localStorage.getItem('trades') === null || localStorage.getItem('trades') === 'undefined'){
            console.log('No Trades found... Creating...');
            const trades = [
                {
                    text: 'Gold is down Today - Bloomberg'
                },
                {
                    text: 'Rising Activity in JNUG'
                },
                {
                    text: 'SPY showing high volatility'
                }
            ]

            localStorage.setItem('trades', JSON.stringify(trades));
            return;
        } else {
            console.log('Found trades....');
        }
    }
}