import {Component} from '@angular/core'
import {PostQouteModel} from '../models/post-qoute.model'


@Component({
    moduleId: module.id,
    template: ''
})

export class SimulatorRandomQuoteComponent{
    public insuranceTypes:string[ ] = ['Ride Sharing', 'Food Delivery', 'Rental Car','Holiday Travel'];
    public genders:string[ ] = ['Male', 'Male', 'Male', 'Male','Female', 'Female', 'Female', 'Female'];
    public ages:string[ ] = ['18', '19', '20', '21','22', '23', '24', '25','26', '27', '28', '29','30', '31', '32', '33'];
    public firstNames:string[ ] = ['John', 'Jack', 'Tony', 'Peter','Kevin', 'Anthony', 'James', 'Shaun','Rick', 'Mark', 'Spike', 'Craig','Mickey', 'Ram', 'Jason', 'Andrew'];
    public lastNames:string[ ] = ['Smith', 'Reacher', 'Stark', 'Parker','Spacey', 'Hopkins', 'Ruse', 'Pollock','Roll', 'Spencer', 'Jones', 'Hatter','Mouse', 'Mendes', 'Bourne', 'Blake'];
    public emails:string[ ] = ['js@js.js', 'ivan.z.cai@gmail.com', 'ts@ts.ts', 'pp@pp.pp','ks@ks.ks', 'ah@ah.ah', 'jr@jr.jr', 'sp@sp.sp','sr@sr.sr', 'sj@sj.sj', 'ch@ch.ch', 'mm@mm.mm','jm@jm.jm', 'bd@bd.bd', 'jb@jb.jb', 'ab@ab.ab', 'chaitanya.mokkapati@smsmt.com', 'chaitanya.mvnb@gmail.com'];
    public mobiles:string[ ] = ['0426706255', '0426706255', '0426706255', '0426706255','0426706255', '0426706255', '0426706255', '0426706255','0426706255', '0426706255', '0426706255', '0426706255','0426706255', '0426706255', '0426706255', '0426706255'];
    public destinations:string[ ] = [
        '21 Regent St, Redfern', 
        'unit 21/32 King St, Surry Hills', 
        '5 Railway Pd, Glenfield',
         'unit 3/40 John St Strathfield',
         '21 Regent St, Redfern', 
        '21/32 Renwick St Sydney', 
        'Level 4,40, Pitt St, CBD',
         '50 John St, Newtown ',
         '80 Lawis St, Glebe', 
        'unit 33/50 King St, Paddington', 
        '5 George Pde, Glenfield',
         '33  John Cresent, Strathfield',
         '4 Alexandria Rd, Campsie',
         '67  Redfern St, Lawishem',
         '33  Ben Cresent, Croydon',
         'Unit 33/5 Steve St, Killira',
        ];
    public companies:string[ ] = ['Tuber', 'Delivermoo','GoGet','MenuLog', 'SMS Insurance'];
  
     
      
    public randomQuote: PostQouteModel = 
        new PostQouteModel(
            this.getRandom(this.insuranceTypes),
            this.getRandom(this.genders),
            this.getRandom(this.ages),
            this.getRandom(this.destinations),
            this.getRandom(this.destinations),
            this.getRandom(this.companies),
            this.getRandom(this.firstNames),
            this.getRandom(this.lastNames),
            this.getRandom(this.emails),
            this.getRandom(this.mobiles)
            );

    public getRandomQoute():PostQouteModel{
        return  new PostQouteModel(
            this.getRandom(this.insuranceTypes),
            this.getRandom(this.genders),
            this.getRandom(this.ages),
            this.getRandom(this.destinations),
            this.getRandom(this.destinations),
            this.getRandom(this.companies),
            this.getRandom(this.firstNames),
            this.getRandom(this.lastNames),
            this.getRandom(this.emails),
            this.getRandom(this.mobiles)            
            );
    }

    public getRandom(arrayObject:string[]){
        return  arrayObject[Math.floor(Math.random()*arrayObject.length)];

    }
}
