export interface Options {
    parent: HTMLElement;
    displacementImage: string;
    image1: string;
    image2: string;
    imagesRatio?: number;
    intensity?: number;
    intensity1?: number;
    intensity2?: number;
    angle?: number;
    angle1?: number;
    angle2?: number;
    speed?: number;
    speedIn?: number;
    speedOut?: number;
    hover?: boolean;
    easing?: string;
    video?: boolean;
}
declare class HoverEffect {
    constructor(opts: Options);
    next: () => void;
    previous: () => void;
    destroy: () => void;
}
export default HoverEffect;
