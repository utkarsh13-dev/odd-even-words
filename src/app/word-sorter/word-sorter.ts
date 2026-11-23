import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-word-sorter',
  styleUrl: './word-sorter.css',
  templateUrl: './word-sorter.html',
})
export class WordSorter {
onInputChange(event:Event){
const val=(event.target as HTMLInputElement ).value
console.log(val)
console.log(val.length)
}

}
