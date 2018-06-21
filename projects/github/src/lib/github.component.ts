import {Component, OnInit, Input} from '@angular/core';
import GitHub from 'github-api';
import {ApiService} from './api/api.service';

@Component({
    selector: 'A-Github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

    /*TODO add github.js
    * load user repo and list them in repo tab
    * implement action on repo(clone action)
    * emit the clone to anyone who would like to complete action on that clone event
    * send status on OnActionTaken var as @Input that is received when done
    * */
    public repos: any[];
    @Input() token: string;
    
    constructor(private api: ApiService) {
    }

    ngOnInit() {
        const gh = new GitHub({
            username: 'richard457',
            password: 'fhdfjhjh@8r8r78bcbf!@&*'
            /* also acceptable:
               token: 'MY_OAUTH_TOKEN'
             */
        });
        const me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
        me.listRepos((err, repos) => {
            this.repos = repos;
        });
    }

// ng generate component foo --project=example-ng6-lib
    takeAction(repo) {
        console.log(repo);
        // this.api.copyToYegoBox(repo).subscribe(res => {
        //     console.log(res);
        // });
    }

}
