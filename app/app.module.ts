import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavBarComponent} from './navbar.component';
import { UsersComponent} from './users.component';
import { PostsComponent} from './posts.component';
import { HomeComponent} from './home.component';
import { routing} from './app.routing';
@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,NavBarComponent,HomeComponent,UsersComponent,PostsComponent ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
