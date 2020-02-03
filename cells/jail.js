class Jail extends Cell {

    constructor( fine ) {
        super();
        this.name = "Jail";
        this.fine = fine;
    }

    execute( player ) {
        player.subMoney( this.fine );
    }
}