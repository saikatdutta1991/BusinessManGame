class GameSimulator {

    constructor( noOfPlayers, cellsString ) {

        this.board = new Board( this.parseCellChain( cellsString ) );
        this.players = this.createPlayers( noOfPlayers );
        this.cPlayerIndex = -1; 
    }


    nextPlayerIndex() {
        return ( this.cPlayerIndex + 1 ) % this.players.length;
    }

    nextPlayer() {
        this.cPlayerIndex = this.nextPlayerIndex();
        return this.players[ this.cPlayerIndex ]; 
    }


    simulate( diceInputStr ) {
        let inputs = this.parseDiceInputs( diceInputStr );
        inputs.forEach( diceOutput  => {
            this.nextPlayer().play( diceOutput );
        })

        return this.getWinner();
    }


    getWinner() {

        return this.players.reduce( (pp, cp) => {
            return pp.getMoney() > cp.getMoney() ? pp : cp;
        });

    }


    parseDiceInputs( diceInputStr ) {
        return diceInputStr.split( "," );
    }



    createPlayers( noOfPlayers ) {
        return Array.from({length: noOfPlayers}).map( ( e, i ) => this.createPlayer( i + 1 ) );
    }

    createPlayer ( id ) {
        return new Player( `Player-${id}`, 1000, this.board )
    }


    parseCellChain( cellsString ) {

        let cells = cellsString.split( "," ).map( literal => CelFactory.create( literal ) );

        let lastCell = cells.reduce( ( pCell, cCell ) =>  {
            pCell.setNext( cCell );
            return cCell;
        });

        return lastCell.setNext( cells[ 0 ] );
    }


}