function randomQuote(){
var writerQuote=document.getElementById("quote");
var writerName=document.getElementById("writer");

var quotes=[
    {quote:"“Be yourself; everyone else is already taken.”",writer:"-Oscar Wilde"},
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",writer:"-Marilyn Monroe"},
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",writer:"-Albert Einstein"},
    {quote:"“So many books, so little time.”",writer:"-Frank Zappa"},
    {quote:"“It is better to be hated for what you are than to be loved for what you are not.”",writer:"-Andre Gide, Autumn Leaves"},
    {quote:"“A room without books is like a body without a soul.”",writer:"-Marcus Tullius Cicero"},
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",writer:"-Bernard M. Baruch"},
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",writer:"-Dr. Seuss"},
    {quote:"“You only live once, but if you do it right, once is enough.”",writer:"-Mae West"},
    {quote:"“Be the change that you wish to see in the world.”",writer:"-Mahatma Gandhi"}
]

var randomIndex=Math.floor(Math.random()*quotes.length);
writerQuote.innerHTML=quotes[randomIndex].quote
writerName.innerHTML=quotes[randomIndex].writer
}