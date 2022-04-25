import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiempoReaccionComponent } from './pages/tests/tiempo-reaccion/tiempo-reaccion.component';
import { MemoriaNumericaComponent } from './pages/tests/memoria-numerica/memoria-numerica.component';
import { MemoriaVerbalComponent } from './pages/tests/memoria-verbal/memoria-verbal.component';
import { MemoriaVisualComponent } from './pages/tests/memoria-visual/memoria-visual.component';
import { VelocidadEscrituraComponent } from './pages/tests/velocidad-escritura/velocidad-escritura.component';
import { StroopComponent } from './pages/tests/stroop/stroop.component';
import { HomeComponent } from './pages/home/home.component';
import { TestBoxComponent } from './components/test-box/test-box.component';
import { TestTRComponent } from './tests/test-tr/test-tr.component';
import { TestMNumComponent } from './tests/test-mnum/test-mnum.component';
import { TestDescriptionBoxComponent } from './components/test-description-box/test-description-box.component';
import { TestResultsComponent } from './components/test-results/test-results.component';
import { GlobalResultsComponent } from './components/global-results/global-results.component';
import { TwoRowsTextblockComponent } from './components/two-rows-textblock/two-rows-textblock.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
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
    TiempoReaccionComponent,
    MemoriaNumericaComponent,
    MemoriaVerbalComponent,
    MemoriaVisualComponent,
    VelocidadEscrituraComponent,
    StroopComponent,
    HomeComponent,
    TestBoxComponent,
    TestTRComponent,
    TestMNumComponent,
    TestDescriptionBoxComponent,
    TestResultsComponent,
    GlobalResultsComponent,
    TwoRowsTextblockComponent,
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
