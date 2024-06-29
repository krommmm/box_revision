export class IModal { 
    constructor() {
        if (new.target === IModal) {
            throw new TypeError("Cannot construct IModal instance directly.");
        }
    }

    open() {
        throw new Error("This method must be implemented.");
    }

    close() {
        throw new Error("This method must be implemented.");
    }

    clearInputs() {
        throw new Error("This method must be implemented.");
    }
}