import { TestBed } from '@angular/core/testing';

import { GithubProjectsService } from './github-projects.service';

describe('GithubProjectsService', () => {
  let service: GithubProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
