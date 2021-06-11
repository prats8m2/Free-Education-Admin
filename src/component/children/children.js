import React from 'react';
import DataTable from 'react-data-table-component';

export default function Children() {
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
      <section id="main-content">
        <section className="wrapper site-min-height ">
          <b className="page-title">Children</b>
          <button type="button" class="btn btn-theme02 float-right add-button">
            Add Children &nbsp;
            <i class="fa fa-building"></i>
          </button>

          <DataTable title="Children List" columns={columns} data={data} />
        </section>
      </section>
    </div>
  );
}
