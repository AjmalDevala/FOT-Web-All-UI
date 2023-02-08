import React from 'react';
import { GrLocation } from 'react-icons/gr';


const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
  );
  
  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
    </div>
  );

  export const gridUserStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-gray-500 py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Actions}
    </button>
  );


export const employeesGrid = [
    { headerText: 'Username',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Job',
      headerText: 'Job',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Place',
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry },
  
    { field: 'Status',
      headerText: 'Status',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'Actions',
      headerText: 'Actions',
      template: gridUserStatus,
      width: '120',
      textAlign: 'Center' },
    ];


   

    export const employeesData = [
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:'',
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:''
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        {
          
          Name: 'Nihal',
          Job: 'Sales Representative',
          HireDate: '01/02/2021',
          Country: 'Kerala',
          ReportsTo: 'Carson',
          EmployeeImage:""
          ,
          Status:'Active',
          Actions:'Block',
          StatusBg: '#03C9D7',
        },
        
      ];
  


