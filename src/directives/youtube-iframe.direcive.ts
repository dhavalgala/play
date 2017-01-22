import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[youtube]'
})

export class YoutubeDirective {

    @Input('youtube') youtubeVideoId: string;
    nativeElement: any;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.nativeElement = el.nativeElement;
    }

    ngOnInit() {
        console.log(this.youtubeVideoId);
        let iframeElement = this.renderer.createElement(this.nativeElement, "iframe");
        this.renderer.setElementAttribute(iframeElement, "src", "http://www.youtube.com/embed/" + this.youtubeVideoId+"?modestbranding=1&controls=2");
        this.renderer.setElementAttribute(iframeElement, "frameborder", "0");
        this.renderer.setElementAttribute(iframeElement, "allowscriptaccess", "always");
        this.renderer.setElementAttribute(iframeElement, "allowfullscreen", "allowfullscreen");
        this.renderer.setElementAttribute(iframeElement, "mozallowfullscreen", "mozallowfullscreen");
        this.renderer.setElementAttribute(iframeElement, "msallowfullscreen", "msallowfullscreen");
        this.renderer.setElementAttribute(iframeElement, "oallowfullscreen", "oallowfullscreen");
        this.renderer.setElementAttribute(iframeElement, "webkitallowfullscreen", "webkitallowfullscreen");
        this.renderer.setElementProperty(iframeElement, "width", "100%");
        this.renderer.setElementProperty(iframeElement, "height", "200px");
        this.renderer.setElementStyle(iframeElement, "overflow", "hidden");
        this.renderer.setElementStyle(iframeElement, "width", "100%");
    }
}