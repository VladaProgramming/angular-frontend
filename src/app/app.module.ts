import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';

import { UsersService } from './users.service';

const routes: Routes = [
    {path: 'create', component: CreateComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'list', component: ListComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      MatToolbarModule,
      HttpClientModule,
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatIconModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatTableModule,
      MatDividerModule,
      MatSnackBarModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
