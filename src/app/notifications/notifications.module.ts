import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { NotificationsComponent } from './notifications.component';

const appRoutes: Routes = [
    { path: 'notifications', component: NotificationsComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    declarations: [
        NotificationsComponent
    ]
})
export class NotificationsModule {}
