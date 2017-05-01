export class Init{
    load(){
        console.log(localStorage.getItem('trades'));
        if(localStorage.getItem('trades') === null || localStorage.getItem('trades') == 'undefined'){
            console.log('No Trades found... Creating...');
        
            var trades = [
                {
                    text: "akldsjfklasjdf"
                },
                {
                    text: "asdjf;ajsdfklasjdkfl"
                },
                {
                    text: "aksdfj;asjdfklajsdfkljaskldjfk"
                }
            ]

            localStorage.setItem('trades', JSON.stringify(trades));
            return 
        } else {
            console.log("Found trades....");
        }
    }
}