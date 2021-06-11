import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
  text: {
    primary: '#fff',
    secondary: '#fff',
  },
  background: {
    default: '#000',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#261354',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
  header: {
    style: {
      fontSize: '30px',
      fontWeight: '500',
      textTransform: 'uppercase',
      paddingLeft: '0 8px',
    },
  },
});
export default function Ngo() {
  const data = [
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
    {
      name: 'Kalyan Org',
      noc: 25,
      contact: '9876543210',
      address: '123 Atal marg Noida UP',
    },
  ];
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'No. of Children',
      selector: 'noc',
      sortable: true,
    },
    {
      name: 'Contact no.',
      selector: 'contact',
    },
    {
      name: 'Address',
      selector: 'address',
      // right: true,
    },
  ];

  return (
    <div>
      <section className="wrapper site-min-height ">
        <center>
          <b className="page-title">
            NGO<span>s</span>
          </b>
        </center>
        <button type="button" class="btn btn-theme02 float-right add-button">
          Add NGO &nbsp;
          <i class="fa fa-building"></i>
        </button>

        <DataTable
          title=""
          background="red"
          columns={columns}
          data={data}
          selectableRows
          theme="solarized"
        />
      </section>
    </div>
  );
}
