class Cell {

    constructor( ) { }

    hasNext() {
        return !!this.next;
    }

    getNext() {
        return this.next;
    }

    setNext( next ) {
        this.next = next;
        return this.next;
    }

}