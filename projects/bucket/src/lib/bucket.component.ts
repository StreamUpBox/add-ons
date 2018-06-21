import { Component, OnInit } from '@angular/core';
import { createBitbucketAPI } from 'bitbucket-api-v2';
@Component({
  selector: 'A-Bucket',
  template: `
    <p>
      bucket works!
    </p>
  `,
  styles: []
})
export class BucketComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

}
