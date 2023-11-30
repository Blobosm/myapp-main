import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page404Page } from './page404.page';
import { IonicModule } from '@ionic/angular';
import { TestService } from '../../services/test.service';

describe('Page404Page', () => {
  let component: Page404Page;
  let fixture: ComponentFixture<Page404Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page404Page],
      imports: [IonicModule.forRoot()],
      providers: [{
        provide: TestService,
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(Page404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
