import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtistCreateComponent } from './page-artist-create.component';

describe('PageArtistCreateComponent', () => {
  let component: PageArtistCreateComponent;
  let fixture: ComponentFixture<PageArtistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageArtistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArtistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
