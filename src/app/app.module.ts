import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { MainTestComponent } from './components/main/main-test/main-test.component';
import { TiempoReaccionComponent } from './components/main/tiempo-reaccion/tiempo-reaccion.component';
import { MemoriaNumericaComponent } from './components/main/memoria-numerica/memoria-numerica.component';
import { MemoriaVerbalComponent } from './components/main/memoria-verbal/memoria-verbal.component';
import { MemoriaVisualComponent } from './components/main/memoria-visual/memoria-visual.component';
import { VelocidadEscrituraComponent } from './components/main/velocidad-escritura/velocidad-escritura.component';
import { StroopComponent } from './components/main/stroop/stroop.component';

const appRoutes: Routes = [
  {path: "", component: MainComponent},
  {path: "tiempo-reaccion", component: TiempoReaccionComponent},
  {path: "memoria-numerica", component: MemoriaNumericaComponent},
  {path: "memoria-verbal", component: MemoriaVerbalComponent},
  {path: "memoria-visual", component: MemoriaVisualComponent},
  {path: "velocidad-escritura", component: VelocidadEscrituraComponent},
  {path: "stroop", component: StroopComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    MainComponent,
    MainTestComponent,
    TiempoReaccionComponent,
    MemoriaNumericaComponent,
    MemoriaVerbalComponent,
    MemoriaVisualComponent,
    VelocidadEscrituraComponent,
    StroopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
