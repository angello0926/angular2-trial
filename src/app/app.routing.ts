import {ModuleWithProviders} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { UsersComponent} from './users.component';
import { PostsComponent} from './posts.component';
import { HomeComponent} from './home.component';

export const routing = RouterModule.forRoot([
   {path: 'home', component: HomeComponent},
   {path: 'posts',component: PostsComponent},
   {path: 'users', component: UsersComponent},
   {path: '**', component: HomeComponent }
]);

