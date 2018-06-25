import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    token = '6d713b27c0e8443aaa5e1d1bb2603a04cc75eb96';
    repofolder = [{
        name: 'ganza'
    }];
    db() {
        console.log('double click');
    }

    single() {
        console.log('single click');
    }

    clone(repo) {
        console.log(repo);
    }

}
