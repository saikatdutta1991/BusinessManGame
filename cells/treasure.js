class Treasure extends Cell {

    constructor( worth ) {
        super();
        this.name = "Treasure";
        this.worth = worth;
    }

    execute( player ) {
        player.addMoney( this.worth );
    }
}