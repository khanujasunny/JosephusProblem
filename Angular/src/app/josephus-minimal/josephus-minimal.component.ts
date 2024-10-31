  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterOutlet } from '@angular/router';
  
  @Component({
    selector: 'josephus-minimal',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule],
    templateUrl: './josephus-minimal.component.html',
    styleUrl: './josephus-minimal.component.scss'
  })
  export class JosephusMinimalComponent {
    noOfPeople: number | undefined;
    survivorsList: any = [];
  
    constructor(){this.initKillingPeopleJosh();}
  
  
    initKillingPeopleJosh(){
            // Driver code
            if(!this.noOfPeople) return ;
          var n = this.noOfPeople; // specific n and k values for original
          // josephus problem
          var k = 2;
          k--; // (k-1)th person will be killed
          var index = 0; // The index where the person which will die
  
          var person = [];
  
          // fill the person vector
          for (var i = 1; i <= n; i++) {
              person.push(i);
          }
  
          this.Josh(person, k, index);
          console.info(person);
    }

    Josh( person: any[] , k: any , index: number) {
  
      // Base case , when only one person is left
      if (person.length == 1) {
        if (typeof document !== 'undefined') {
           this.survivorsList.unshift([...person]);
          // document.write(person[0]);
        };
          return;
      }
    
      // find the index of first person which will die
      index = ((index + k) % person.length);
    
      // remove the first person which is going to be killed
       if (index > -1) {
     person.splice(index, 1);
    }
     this.survivorsList.unshift([...person]);
      // recursive call for n-1 persons
      this.Josh(person, k, index);
    }
  
    trackByFn = (index: any, item: { id: any; }) => item.id;
  
  }
  
  
  
  
