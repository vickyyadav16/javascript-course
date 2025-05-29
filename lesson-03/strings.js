'hello'
alert('hello');


// Concatenation(combine strings together)
'some' + 'text'
'some' + 'more' + 'text'


typeof 2
typeof 'hello'


// type coercion(automatic type conversion)
'hello' + 3
'$' + 20.95 + 7.99
'$' + (20.95 + 7.99)
'$' + (2095 + 799) / 100

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

"hello"
"I'm learning JavaScript"


// Escape Character(\)
'I\'m learning JavaScript'
alert('some\ntext');


// template strings
`hello`
// interpolation = recommended solution
`Items (${1 + 1}): $${(2095 + 799) / 100}`

// multiline string feature
`some
text`


// Exercise?
// 1.
        'My name is:'
// 2.
        "vicky yadav"
// 3.
        'My name is:' + "vicky yadav"
// 4.
        'Total cost:' + '$' + (5 + 3)
// 5.
        `Total cost: $${5 + 3}`
// 6.
        alert(`Total cost: $${5 + 3}`)
// 7.
        `Total cost(${1 + 1}): $${(599 + 295) / 100}`
// 8.
        alert(`Total cost(${1 + 1}): $${(599 + 295) / 100}`);
// 9.
        alert(`Total cost(${1 + 1}): $${(599 + 295) / 100} \n Thank you, come again`);
