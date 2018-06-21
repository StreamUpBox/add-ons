import {Injectable} from '@angular/core';
import repo from './repo.js';
@Injectable({
    providedIn: 'root'
})
export  class MockService {

    public getFolders(): any[] {
        return repo;
    }

}
