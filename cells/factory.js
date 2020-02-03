class CelFactory {

    static cellMap = {
        'E' : () => new Empty(),
        'J' : () => new Jail( 150 ),
        'T' : () => new Treasure( 200 ),
        'H' : () => new Hotel( 200, 50 )
    };

    static create( type ) {
        return this.cellMap[ type ](); 
    }
}