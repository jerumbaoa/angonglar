import { Component, OnInit } from '@angular/core';

class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string ) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {
  setup: string;
  punchline: string;
  jokes : Object[];
  newJokes: Joke[];

  constructor() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (Hello Me)";
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’",
        hide: true
      },
    ];
    this.newJokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  ngOnInit() {
    // add joke on array after 15secs
    setTimeout(()=>{
      this.jokes.push(
        {
          setup: "What is your name?",
          punchline: "I'm jabag",
          hide: true
        }
      )
    }, 15000)
  }

  // triggered when click event was called
  toggle(joke) {
    joke.hide = !joke.hide;
  }
}
