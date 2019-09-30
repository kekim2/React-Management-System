import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
   'id': 1,
   'image': 'https://placeimg.com/64/64/any',
  'name': 'Roda',
  'birthday': '961222',
  'gender': 'male',
  'job': 'University Student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
 'name': 'Rose',
 'birthday': '890322',
 'gender': 'Female',
 'job': 'School Teacher'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
 'name': 'Tim',
 'birthday': '931225',
 'gender': 'male',
 'job': 'Electrical Engineer'
}]

class App extends Component {
 
  render() {
  return (
    <div>
  {
    customers.map(c => {
      return <Customer
      key={c.id}
      id={c.id}
      image={c.image}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}
      />
    })
  }
    </div>
    );
  }
}
export default App;
