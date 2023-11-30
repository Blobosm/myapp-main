import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallecursoPage } from './detallecurso.page';
import { IonicModule } from '@ionic/angular';
import { TestService } from '../services/test.service';

describe('DetallecursoPage', () => {
  let component: DetallecursoPage;
  let fixture: ComponentFixture<DetallecursoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallecursoPage],
      imports: [IonicModule.forRoot()],
      providers: [{
        provide: TestService,
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallecursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
