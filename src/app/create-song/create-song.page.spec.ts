import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSongPage } from './create-song.page';

describe('CreateSongPage', () => {
  let component: CreateSongPage;
  let fixture: ComponentFixture<CreateSongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
