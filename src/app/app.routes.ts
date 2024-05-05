import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    {path:'Home',component:DashBoardComponent},
    {path:'AboutUs',component:AboutUsComponent},
    {path:'ContactUs',component:ContactusComponent}
 ];
