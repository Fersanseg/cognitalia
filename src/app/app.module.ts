import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { SingleTestGlobalResultsComponent } from './components/single-test-global-results/single-test-global-results.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthInterceptorService } from './services/common/auth-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ConstructionComponent } from './pages/construction/construction.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "acceso-usuario", component: LoginComponent, data: { animation: 'LoginPage' }},
  {path: "registro-usuario", component: RegisterComponent, data: { animation: 'RegisterPage' }},
  {path: "tiempo-reaccion", component: TiempoReaccionComponent, data: { animation: 'ReactionTimePage' }},
  {path: "memoria-numerica", component: MemoriaNumericaComponent, data: { animation: 'NumberMemoryPage' }},
  {path: "memoria-verbal", component: ConstructionComponent, data: { animation: 'VerbalMemoryPage' }},
  {path: "memoria-visual", component: ConstructionComponent, data: { animation: 'VisualMemoryPage' }},
  {path: "velocidad-escritura", component: ConstructionComponent, data: { animation: 'TypingSpeedPage' }},
  {path: "stroop", component: ConstructionComponent, data: { animation: 'StroopPage' }},
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
    SingleTestGlobalResultsComponent,
    LoginComponent,
    RegisterComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    JwtModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
