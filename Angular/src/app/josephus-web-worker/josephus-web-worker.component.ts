  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterOutlet } from '@angular/router';
  import { error } from 'console';
  
  @Component({
    selector: 'josephus-webworker',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule],
    templateUrl: './josephus-web-worker.component.html',
    styleUrl: './josephus-web-worker.component.scss'
  })
  export class JosephusWebWorkerComponent {
    noOfPeople: number | undefined;
    peopleList: any[] | undefined;
    survivorsList: any = [];
  
    constructor(){
  
      this.initKillingPeople();
    }
  
  
  
    initKillingPeople(){
      this.maxRunCycle = 1000;
      if(!this.noOfPeople) return;
      this.peopleList = [];
      this.survivorsList = [];
  //    this.peopleList = new Array(_noOfPeople).fill(0).map((_,i) => { return {number: i+1, personName: 'a', isAlive: true}; } );
      this.peopleList = new Array(this.noOfPeople); for (let i=0; i<this.noOfPeople; ++i){ this.peopleList[i] = {number: i+1, personName: 'a', isAlive: true}; }
      this.survivorsList.push(this.peopleList);
      this.startKillingRound([...this.peopleList]).then((data: any) =>{
        console.info('Cycele Run: ',1000 - this.maxRunCycle, data);
      }, (e: any) => { console.info('Error',e);  });
    }
  
  
  
    maxRunCycle: number = 1000;
    startKillingRound(peopleList: any[]): any {
      return new Promise((resolve) => {
        this.maxRunCycle--;
        if(peopleList.filter(person => person.isAlive).length < 2) resolve(peopleList);
        else if(this.maxRunCycle == 0) resolve(peopleList);
        else{
          peopleList.forEach((person,index) => {
            if(person.isAlive){
              let indexKilled = this.killNextAlivePerson(peopleList, index);
              if(indexKilled === false){
                let whoKilled = this.killNextAlivePerson(peopleList, -1);
              }else if(indexKilled == -1){
  
              }
            }
          });
          // if last person is alive = kill 1st person
          if(peopleList[peopleList.length-1].isAlive){
            peopleList[0].isAlive = false;
          }
          this.survivorsList.push(peopleList.filter(person => person.isAlive));
          setTimeout(() => {
            resolve(this.startKillingRound(peopleList));
          }, 500);
        }
      });
  
    }
  
  
    killNextAlivePerson(peopleList: string | any[], index: number): any {
      for(let toKillIndex = index+1; toKillIndex < peopleList.length;toKillIndex++){
        if(peopleList[toKillIndex].isAlive){
          peopleList[toKillIndex].isAlive = false;
          return toKillIndex;
        };
      }
      return false;
    }

  
    trackByFn = (index: any, item: { id: any; }) => item.id;
  
  }
  
  
  
  
