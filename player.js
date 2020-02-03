class Player {
    
    constructor( name, money, board, currentCell ) {
        this.name = name;
        this.board = board;
        this.currentCell = currentCell;
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


    move( steps ) {
        return this.currentCell = this.board.moveSteps( this.currentCell, steps );
    }


    play( dice ) {
        this.move( dice ).execute( this );
    }



}