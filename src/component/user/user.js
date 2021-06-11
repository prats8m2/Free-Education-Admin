import React from 'react';
import DataTable from 'react-data-table-component';

export default function User() {
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
        <b className="page-title">Users</b>
        <button type="button" class="btn btn-theme02 float-right add-button">
          Add User &nbsp;
          <i class="fa fa-building"></i>
        </button>

        <DataTable title="Users List" columns={columns} data={data} />
      </section>
    </div>
  );
}
