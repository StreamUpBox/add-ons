import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    token = '6d713b27c0e8443aaa5e1d1bb2603a04cc75eb96';
    repofolder = [];
    processing = {is_loading : false, file: {id: 0}};
    db() {
        console.log('double click');
    }

    single() {
        console.log('single click');
    }

    cloneAction(repo) {
        console.log(repo);
    }
    pullAction(fd){
    console.log('pull',fd);
    }
     pushAction(fd){
    console.log('push',fd);
    }
     openAction(fd){
    console.log('open',fd);
    }
}
