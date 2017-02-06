import {Injectable } from '@angular/core';
import {Http } from '@angular/http';

import 'rxjs/Rx';


@Injectable()
export class RedditService{

    http:any;
    baseurl:String;

    constructor(http:Http){
        this.http =http;
        this.baseurl = 'http://www.reddit.com/r';

    }

   getPost(category, limit){
       return this.http.get(this.baseurl+"/"+category+"/top.json?limit="+limit)
            .map((res) => res.json());
   }
    


}

