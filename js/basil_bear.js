// // quote of the day

// var quotesArray = [{
//     quote: "If you cannot see very far ahead, go ahead as far as you can see.",
//     author: " ~Dawson Trotman",
//     day: 0
// }, {
//     quote: "Live in the sunshine, swim the sea, drink the wild air.",
//     author: " ~Ralph Waldo Emerson",
//     day: 1
// }, {
//     quote: "Success is never owned, it is only rented. And the rent is due every day.",
//     author: " ~Rory Vaden",
//     day: 2
// }, {
//     quote: "Human progress never rolls in on the wheels of inevitability; it comes through the tireless efforts of men willing to be coworkers with God.",
//     author: " ~Martin Luther King Jr.",
//     day: 3
// }, {
//     quote: "Those who will never be fooled can never be delighted, because withoutself-forgetfulness there can be no delight.",
//     author: " ~C.S. Lewis",
//     day: 4
// }, {
//     quote: "May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.",
//     author: " ~Romans 15:13",
//     day: 5
// }, {
//     quote: "But the Hebrew word, the word timshel—‘Thou mayest’— that gives a choice. It might be the most important word in the world. That says the way is open. That throws it right back on a man. For if ‘Thou mayest’—it is also true that ‘Thou mayest not.",
//     author: " ~John Steinbeck, East of Eden",
//     day: 6
// }];

// i = -1;

// (function f(){
//     i = (i + 1) % quotesArray.length;
//     $('#quote_otd').append('<p>'+ quotesArray[i].quote + ' ' + ' ' + ' ' + quotesArray[i].author + '</p>');
//     setTimeout(f, 600000);
// })();

// console.log(i);




// $('#quote_otd').append('<p>'+ quotesArray[0].quote + ' ' + ' ' + ' ' + quotesArray[0].author + '</p




var quotes = [
        {
            day: "Sun",
            quote: "If you cannot see very far ahead, go ahead as far as you can see.  ~Dawson Trotman"
        },
        {
            day: "Mon",
            quote: "Live in the sunshine, swim the sea, drink the wild air.  ~Ralph Waldo Emerson"
        },
        {
            day: "Tue",
            quote: "Success is never owned, it is only rented. And the rent is due every day.  ~Rory Vaden"
        },
        {
            day: "Wed",
            quote: "Human progress never rolls in on the wheels of inevitability; it comes through the tireless efforts of men willing to be coworkers with God.  ~Martin Luther King Jr."
        },
        {
            day: "Thu",
            quote: "Those who will never be fooled can never be delighted, because withoutself-forgetfulness there can be no delight.  ~C.S. Lewis"
        },
        {
            day: "Fri",
            quote: "May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.  ~Romans 15:13"
        },
        {
            day: "Sat",
            quote: "But the Hebrew word, the word timshel—‘Thou mayest’— that gives a choice. It might be the most important word in the world. That says the way is open. That throws it right back on a man. For if ‘Thou mayest’—it is also true that ‘Thou mayest not.  ~John Steinbeck, East of Eden"
        }
    ];

    var quoteOfTheDay = function(quote) {
        for (var i = 0; i <= quotes.length; i++) {
            if (moment().format("ddd") === quotes[i].day) {
                return quotes[i].quote;
            }
        }
    };

    // console.log(moment().format("ddd"));
    $(".quoteOfTheDay").text(quoteOfTheDay());























