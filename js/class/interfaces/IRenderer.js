export class IRenderer {

    constructor() {
        if (new.target === IRenderer) {
            throw new TypeError("Cannot construct IRenderer instance directly.");
        }
    }

    getIntroContent() {
        throw new Error("getIntroContent isn't implemented yet");
    }

    getWeekContent() {
        throw new Error("getWeekContent isn't implemented yet");
    }

    getCemetaryContent() {
        throw new Error("getCemetaryContent isn't implemented yet");
    }

    renderContent(content, selector) {
        throw new Error("renderContent method isn't implemented yet.");
    }
}