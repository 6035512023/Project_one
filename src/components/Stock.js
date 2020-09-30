import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import fire from '../config/Fire';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon } from 'react-bootstrap';
import './Stock.css';



const Stock = (props) => {
  const data_people = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc'
      },
      {
        label: 'Surname',
        field: 'surname',
        sort: 'asc'
      },
      {
        label: 'Country',
        field: 'country',
        sort: 'asc'
      },
      {
        label: 'City',
        field: 'city',
        sort: 'asc'
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc'
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc'
      }
    ],
    rows: [
      {
        'id': '1',
        'name': 'Kate',
        'surname': 'Moss',
        'country': 'USA',
        'city': 'New York City',
        'position': 'Web Designer',
        'age': '23'
      },
      {
        'id': '2',
        'name': 'Anna',
        'surname': 'Wintour',
        'country': 'United Kingdom',
        'city': 'London',
        'position': 'Frontend Developer',
        'age': '36'
      },
      {
        'id': '3',
        'name': 'Tom',
        'surname': 'Bond',
        'country': 'Spain',
        'city': 'Madrid',
        'position': 'Photographer',
        'age': '25'
      },
      {
        'id': '4',
        'name': 'Jerry',
        'surname': 'Horwitz',
        'country': 'Italy',
        'city': 'Bari',
        'position': 'Editor-in-chief',
        'age': '41'
      },
      {
        'id': '5',
        'name': 'Janis',
        'surname': 'Joplin',
        'country': 'Poland',
        'city': 'Warsaw',
        'position': 'Video Maker',
        'age': '39'
      },
      {
        'id': '6',
        'name': 'Gary',
        'surname': 'Winogrand',
        'country': 'Germany',
        'city': 'Berlin',
        'position': 'Photographer',
        'age': '37'
      },
      {
        'id': '7',
        'name': 'Angie',
        'surname': 'Smitd',
        'country': 'USA',
        'city': 'San Francisco',
        'position': 'Teacher',
        'age': '52'
      },
      {
        'id': '8',
        'name': 'John',
        'surname': 'Mattis',
        'country': 'France',
        'city': 'Paris',
        'position': 'Actor',
        'age': '28'
      },
      {
        'id': '9',
        'name': 'Otto',
        'surname': 'Morris',
        'country': 'Germany',
        'city': 'Munich',
        'position': 'Singer',
        'age': '35'
      }
    ]
  };

  const logout = e => {

    fire.auth().signOut();
  }

  return (
    
    <div>
      <div className = "rowrow">
        <MDBTable autoWidth striped>
        <MDBTableHead columns={data_people.columns} />
        <MDBTableBody rows={data_people.rows} />
      </MDBTable>
      </div>
      <div>
          <Button variant="outline-info" onClick={logout}>LOGOUT</Button>
      </div>
    </div>

  );
};



export default Stock;