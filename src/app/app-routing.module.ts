import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
