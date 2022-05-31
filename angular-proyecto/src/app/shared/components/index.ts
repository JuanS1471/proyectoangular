import { SolidButtonComponent } from './buttons/solid-button/solid-button.component';
import { CardUserComponent } from './cards/card-user.component';
import { FtTbodyComponent } from './tables/full-table/ft-tbody/ft-tbody.component';
import { FtTfootComponent } from './tables/full-table/ft-tfoot/ft-tfoot.component';
import { FtTheadComponent } from './tables/full-table/ft-thead/ft-thead.component';
import { FullTableComponent } from './tables/full-table/full-table.component';
import { TitleH1Component } from './title-h1/title-h1.component';
import { RowComponent } from './columns/row/row.component';

export const components: any[] = [
    CardUserComponent,
    TitleH1Component,
    SolidButtonComponent,
    FullTableComponent,
    FtTheadComponent,
    FtTbodyComponent,
    FtTfootComponent,
    RowComponent
];

// export all components
export * from './cards/card-user.component';
export * from './title-h1/title-h1.component';
export * from './buttons/solid-button/solid-button.component';
export * from './tables/full-table/ft-tbody/ft-tbody.component';
export * from './tables/full-table/ft-tfoot/ft-tfoot.component';
export * from './tables/full-table/ft-thead/ft-thead.component';
export * from './tables/full-table/full-table.component';
export * from './columns/row/row.component'
