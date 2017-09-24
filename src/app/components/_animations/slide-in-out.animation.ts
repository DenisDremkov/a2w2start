import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
    transition(':enter', [
        query('form', [
            style({'opacity': 0, transform: 'translatex(100px)'}),
            animate('0.15s ease', style({'opacity': 1, transform: 'translatex(0)'}))
        ]),
    ]),
    transition(':leave', [
        query('form', [
            style({'opacity': 1, transform: 'translatex(0)'}),
            animate('0.15s ease', style({'opacity': 0, transform: 'translatex(100px)'}))
        ]),
    ])
]);