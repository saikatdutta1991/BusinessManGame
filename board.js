class Board {

    constructor( head ) {
        this.head = head;
        this.playersCell = new Map();
    }

    getHead() {
        return this.head;
    }


    parse( cellsString ) {

        let cells = cellsString.split( "," ).map( literal => CelFactory.create( literal ) );
        
        let lastCell = cells.reduce( ( pCell, cCell ) =>  {
            pCell.setNext( cCell );
            return cCell;
        });

        this.head = lastCell.setNext( cells[ 0 ] )

        return this;
    }


    getCell( player ) {
        return this.playersCell.get( player ); 
    }


    setCell( player, cell ) {
        this.playersCell.set( player, cell );
        return true;
    }


    movePlayer( player, noSteps ) {

        let current = this.getCell( player ) ? this.getCell( player ) : this.getHead();

        if( noSteps > 0 ) --noSteps;

        for( let i = noSteps; i >= 1; i-- ) {
            current = current.getNext();
        }

        this.setCell( player, current );

        return current;
    }

    
}