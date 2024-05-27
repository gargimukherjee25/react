import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement =
// {
//     type: 'a',
//     props:
//     {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click'
// }
// const anotherElement={
//     <a href="https://google.com" target: '_blank' >Visit</a>
// }
const reactElement = React.createElement
{
    'a',
    {
        href:'https://google.com',target: '_blank'
    },
    'click'
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
