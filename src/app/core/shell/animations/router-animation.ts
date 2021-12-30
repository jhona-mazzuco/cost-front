import { animate, style, transition, trigger } from "@angular/animations";

export const RouterAnimation = trigger('routerAnimation', [
  transition(':enter', [
    style({
      height: '0'
    }),
    animate('.850s ease-out', style({
      height: '*'
    })),
  ]),
])
