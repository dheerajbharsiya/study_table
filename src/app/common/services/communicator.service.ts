import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicatorService {
    private authorDetailsSubject = new Subject<any>();
    setArticleDetails(data: any) {
        this.authorDetailsSubject.next(data);
    }

    getArticleDetails(): Observable<any> {
        return this.authorDetailsSubject.asObservable();
    }
}