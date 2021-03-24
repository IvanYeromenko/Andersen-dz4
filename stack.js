class Stack {
    constructor(items) {
        this._items = [];
        this.max = items;
        if (items == undefined) {
            this.max = 10;
        } else if (!Number.isInteger(items) || items < 0) {
            throw new Error('Ошибка!');
        }
    }

    push(...item) {
        if (this._items.length < this.max) {
            this._items.push(...item);
        } else {
            throw new Error('Ошибка!');
        }
        return this._items;
    }

    pop() {
        if (this._items.length > 0) {
            this._items.pop();
        } else {
            throw new Error('Ошибка!');
        }
        return this._items;
    }

    peek() {
        if (this._items.length > 0)
            return this._items[this._items.length - 1];
        else return null;
    }

    isEmpty() {
        return this._items.length == 0
    }

    toArray() {
        this.array = this._items;
        return this.array;
    }

    static fromIterable(iterable) {
        var newMassive = [];
        if (Array.isArray(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                newMassive.push(iterable[i]);
            }
        } else {
            throw new Error('Ошибка!');
        }
        return newMassive;
    }
}