
import { trigger, state, animate, transition, style, query } from '@angular/animations';
 
export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
    ])
    ,
    transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 }))
    ])
]);