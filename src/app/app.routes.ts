import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JosephusMinimalComponent } from './josephus-minimal/josephus-minimal.component';
import { JosephusInteractiveComponent } from './josephus-interactive/josephus-interactive.component';
import { JosephusWebWorkerComponent } from './josephus-web-worker/josephus-web-worker.component';

export const routes: Routes = [
    {path: "default" , component: AppComponent},
    {path: '', redirectTo: 'webworker', pathMatch: 'full'},
    {path: "minimal" , component: JosephusMinimalComponent},
    {path: "ineractive" , component: JosephusInteractiveComponent},
    {path: "webworker" , component: JosephusWebWorkerComponent},
];
