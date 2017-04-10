import { Component } from '@angular/core';

import { TokenRequest }    from './tokenRequest';
import {TokenService} from './token.service';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms'
@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: './tokenRequest.component.html'
})
export class TokenFormComponent {

  constructor(private _tokenService: TokenService){

  }
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new TokenRequest('password', 'tester', 'Tester123');

  submitted = false;

  submitForm(form: NgForm ) { 
      // console.log(this.model);
      this._tokenService.postTokenRequest(this.model)
      .subscribe(
        data => {
            // refresh the list
            console.log('Success:', data.access_token)
            
        },
        error => {
            console.log("Error: ", error);
          
        }
        );
           this.submitted = true; 

    }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new TokenRequest('', '', '');
  }

 

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/