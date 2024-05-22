import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SampleService } from './services/sample.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let mockSampleService: jasmine.SpyObj<SampleService>;

  beforeEach(async () => {
    mockSampleService = jasmine.createSpyObj<SampleService>('SampleService', [ 'invokeSample' ]);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: SampleService, useValue: mockSampleService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('when button is clicked', () => {
    it('should call the sample service', () => {
      const buttonElement = fixture.debugElement.nativeElement.querySelector('#sampleButton');
      expect(buttonElement).toBeTruthy();
      buttonElement.click();

      expect(mockSampleService.invokeSample).toHaveBeenCalledWith(1234);
    });
  });
});
