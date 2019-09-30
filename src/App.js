import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '700px',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
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
    const { classes } = this.props;
  return (
    <Paper className={classes.root}>
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        <TableCell>Number</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>BirthDay</TableCell>
        <TableCell>Gender</TableCell>
        <TableCell>Job</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
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
    </TableBody>
  </Table>
  </Paper>
    );
  }
}
export default withStyles(styles)(App);
