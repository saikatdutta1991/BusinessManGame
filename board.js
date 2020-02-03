class Board {

    constructor( head ) {
        this.head = head;
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


    moveSteps( currentCell, noSteps ) {
        
        if( !currentCell && noSteps > 0 ) {
            currentCell = this.getHead();
            --noSteps;
        }

        for( let i = noSteps; i >= 1; i-- ) {
            currentCell = currentCell.getNext();
        }

        return currentCell;

    }

    
}