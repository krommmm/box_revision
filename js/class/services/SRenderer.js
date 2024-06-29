export class SRenderer {

    constructor(renderer) {
        this.renderer = renderer;
    }

    displayIntro() {
        const content = this.renderer.getIntroContent();
        this.renderer.renderContent(content, '.semaine_zone');
    }

    displayCemetary() {
        const content = this.renderer.getCemetaryContent();
        this.renderer.renderContent(content, '.cimetary_zone');
    }

    displayWeek() {
        const content = this.renderer.getWeekContent();
        this.renderer.renderContent(content, '.semaine_zone');
    }


}