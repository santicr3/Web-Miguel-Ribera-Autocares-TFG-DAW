import { Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { LoginViewComponent } from './views/login/login-view.component';
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component';
import { ScheduleViewComponent } from './views/schedule-view/schedule-view.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PrivateServiceViewComponent } from './views/private-service-view/private-service-view.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CheckTicketViewComponent } from './views/check-ticket-view/check-ticket-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { UserManagementViewComponent } from './views/user-management-view/user-management-view.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'checkout', component: CheckoutViewComponent },
  { path: 'horario', component: ScheduleViewComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'servicio-privado', component: PrivateServiceViewComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'comprobar-tiquet', component: CheckTicketViewComponent },
  { path: 'gestion-usuarios', component: UserManagementViewComponent },
  { path: '**', component: NotFoundViewComponent },
];
