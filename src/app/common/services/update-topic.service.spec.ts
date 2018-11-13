import { TestBed, inject } from '@angular/core/testing';

import { UpdateTopicService } from './update-topic.service';

describe('UpdateTopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTopicService]
    });
  });

  it('should be created', inject([UpdateTopicService], (service: UpdateTopicService) => {
    expect(service).toBeTruthy();
  }));
});
