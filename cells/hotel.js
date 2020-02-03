class Hotel extends Cell {

    constructor( worth, rent ) {
        super();
        this.name = "Hotel";
        this.worth = worth;
        this.rent = rent;
        this.owner = undefined;
    }

    hasOwner() {
        return !!this.owner;
    }

    getOwner() {
        return this.owner;
    }

    setOwner( owner ) {
        this.owner = owner;
        return this;
    }

    execute( player ) {
        if( this.hasOwner() ) {
            this.getOwner().addMoney( this.rent );
            player.subMoney( this.rent );
        } else if( player.getMoney() >= this.worth ) {
            player.subMoney( this.worth );
            this.setOwner( player );
        }

    }

}  