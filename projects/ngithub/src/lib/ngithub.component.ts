import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import GitHub from 'github-api';
import {ApiService} from './api/api.service';


@Component({
    selector: 'A-NGithub',
    templateUrl: './ngithub.component.html',
    styleUrls: ['./ngithub.component.scss']
})
export class NGithubComponent implements OnInit {

    /*TODO add github.js
       * load user repo and list them in repo tab
       * implement action on repo(clone action)
       * emit the clone to anyone who would like to complete action on that clone event
       * send status on OnActionTaken var as @Input that is received when done
       * */
    public repos: any[];
    @Input() token: string;
    @Input() repofolder: any[];
    @Input() processing ={is_loading : false, file: {id:0}};;
    @Output() clone = new EventEmitter();
    @Output() pull = new EventEmitter();
    @Output() push = new EventEmitter();
    @Output() open = new EventEmitter();
    constructor(private api: ApiService) {
    }
    waiting = true;

    ngOnInit() {

        const gh = new GitHub({
               token: this.token
        });
        const me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
        me.listRepos((err, repos) => {
            this.waiting = false;
            this.repos = repos;
        });
        
    }

// ng generate component foo --project=example-ng6-lib
    cloneAction(repo) {
        this.clone.emit(repo);
    }
    pullAction(fd){
    this.pull.emit(fd);
    }
     pushAction(fd){
    this.push.emit(fd);
    }
    openAction(fd){
      this.open.emit(fd);
    }

}
