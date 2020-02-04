class Player {
    
    constructor( name, money, board ) {
        this.name = name;
        this.board = board;
        this.account = new BankAccount( money );
    }

    addMoney( amount ) {
        this.account.addMoney( amount );
        return this;
    }

    subMoney( amount ) {
        this.account.subMoney( amount );
        return this;
    }

    getMoney() {
        return this.account.getMoney();
    }


    play( dice ) {
        this.board.movePlayer( this, dice ).execute( this );
    }



}