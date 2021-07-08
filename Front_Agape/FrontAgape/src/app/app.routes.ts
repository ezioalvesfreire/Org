import { Routes } from "@angular/router";

//import { HomeComponet} from './home/home.component'
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

export const ROUTES: Routes =[
//{ path: '',component: HomeComponent },
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},

]