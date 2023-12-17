class StringBuilder {
    #vale; 

    constructor(initialValue = ""){
        this.#vale = String(initialValue);
    }

    getValue(){
        return this.#vale;
    }

    padEnd(str){
        this.#vale += str
    }

    padStart(str){
        this.#vale = str + this.#vale
    }

    padBoth(str){
        this.#vale = str + this.#vale + str    
    }

}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="