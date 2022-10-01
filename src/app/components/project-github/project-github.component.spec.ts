import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGithubComponent } from './project-github.component';

describe('ProjectGithubComponent', () => {
  let component: ProjectGithubComponent;
  let fixture: ComponentFixture<ProjectGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
