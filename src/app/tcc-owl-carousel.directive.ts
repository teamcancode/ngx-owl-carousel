import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

declare const $;

@Directive({
    selector: '[tccOwlCarousel]'
})
export class TccOwlCarouselDirective implements AfterViewInit {
    private _element: any;
    private _dataOwl: any;
    private _config: Object;
    private _ngContentAttribute: string;

    constructor(private _elementRef: ElementRef) {
        if (this.isClient()) {
            this._ngContentAttribute = '';
            this._dataOwl = null;
            this._element = $(this._elementRef.nativeElement);
        }
    }

    @Input() set configs(configs: Object) {
        this._config = configs;

        if (this.isClient() && this._dataOwl) {
            for (const configKey in configs) {
                this.updateConfig(configKey, configs[configKey]);
            }

            this.refreshSlide();
        }
    }

    ngAfterViewInit(): void {
        if (this.isClient()) {
            this.initSlide(this._config);
        }
    }

    private initSlide(configs: Object): void {
        if (0 === this._element.length) {
            return;
        }

        const attributes: any = this._element[0].attributes;
        for (const attribute of attributes) {
            const attributeName: string = attribute.name;
            if (0 === attributeName.indexOf('_ngcontent-')) {
                this._ngContentAttribute = attributeName;
                break;
            }
        }

        this._element.addClass('owl-carousel');
        this._element.owlCarousel(configs || {});
        this._dataOwl = this._element.data('owl.carousel');
        this.updateNgContent();
    }

    private refreshSlide(): void {
        if (0 === this._element.length) {
            return;
        }
        this._element.trigger('refresh.owl.carousel');
        this.updateNgContent();
    }

    private updateConfig(key: string, value: any): void {
        this._dataOwl.settings[key] = value;
        this._dataOwl.options[key] = value;
    }

    private updateNgContent() {
        this._element.find('*').each((index, element) => {
            $(element).attr(this._ngContentAttribute, '');
        });
    }

    //noinspection JSMethodCanBeStatic
    private isClient(): boolean {
        return typeof window !== 'undefined';
    }

}
