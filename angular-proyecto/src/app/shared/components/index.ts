import { SolidButtonComponent } from './buttons/solid-button/solid-button.component';
import { CardUserComponent } from './cards/card-user.component';
import { TitleH1Component } from './title-h1/title-h1.component';

export const components: any[] = [
    CardUserComponent,
    TitleH1Component,
    SolidButtonComponent
];

// export all components
export * from './cards/card-user.component';
export * from './title-h1/title-h1.component';
export * from './buttons/solid-button/solid-button.component'
