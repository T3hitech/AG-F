import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MantraComponent } from './mantra/mantra.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PaynowComponent } from './paynow/paynow.component';
import { ProgramComponent } from './program/program.component';
import { PaymentComponent } from './payment/payment.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'mantra', component: MantraComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'equipments', component: EquipmentComponent, canActivate: [authGuard] },
    { path: 'payment', component: PaymentComponent },
    { path: 'paynow', component: PaynowComponent },
    { path: 'program', component: ProgramComponent, canActivate: [authGuard] }
    // { path: 'mantra', component: MantraComponent, canActivate: [authGuard] },

];
