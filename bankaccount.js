class BankAccount {

    constructor( money ) {
        this.money = money;
    }

    getMoney() {
        return this.money;
    }

    addMoney( amount ) {
        this.money += Math.abs( amount );
        return this;
    }

    subMoney( amount ) {
        this.money -= Math.abs( amount );
        return this;
    }

}