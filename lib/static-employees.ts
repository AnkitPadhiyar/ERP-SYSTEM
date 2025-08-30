import { Employee } from './types'

export const staticEmployees: Employee[] = [
  // Core team - 20 employees
  {
    _id: '1',
    employeeId: 'EMP001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1-555-0123',
    department: 'IT',
    position: 'Senior Developer',
    hireDate: new Date('2022-01-15'),
    salary: 85000,
    status: 'active',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1-555-0124'
    }
  },
  {
    _id: '2',
    employeeId: 'EMP002',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    phone: '+1-555-0125',
    department: 'Marketing',
    position: 'Marketing Manager',
    hireDate: new Date('2021-08-20'),
    salary: 75000,
    status: 'active',
    address: {
      street: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Mike Smith',
      relationship: 'Spouse',
      phone: '+1-555-0126'
    }
  },
  {
    _id: '3',
    employeeId: 'EMP003',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@company.com',
    phone: '+1-555-0127',
    department: 'Sales',
    position: 'Sales Representative',
    hireDate: new Date('2023-03-10'),
    salary: 55000,
    status: 'active',
    address: {
      street: '789 Pine Street',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Sarah Johnson',
      relationship: 'Spouse',
      phone: '+1-555-0128'
    }
  },
  {
    _id: '4',
    employeeId: 'EMP004',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@company.com',
    phone: '+1-555-0129',
    department: 'HR',
    position: 'HR Specialist',
    hireDate: new Date('2022-11-05'),
    salary: 65000,
    status: 'active',
    address: {
      street: '321 Elm Street',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      country: 'USA'
    },
    emergencyContact: {
      name: 'David Wilson',
      relationship: 'Spouse',
      phone: '+1-555-0130'
    }
  },
  {
    _id: '5',
    employeeId: 'EMP005',
    firstName: 'Robert',
    lastName: 'Brown',
    email: 'robert.brown@company.com',
    phone: '+1-555-0131',
    department: 'IT',
    position: 'Software Developer',
    hireDate: new Date('2022-06-10'),
    salary: 72000,
    status: 'active',
    address: {
      street: '555 Tech Drive',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Lisa Brown',
      relationship: 'Spouse',
      phone: '+1-555-0132'
    }
  },
  {
    _id: '6',
    employeeId: 'EMP006',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@company.com',
    phone: '+1-555-0133',
    department: 'Marketing',
    position: 'Content Creator',
    hireDate: new Date('2023-01-20'),
    salary: 58000,
    status: 'active',
    address: {
      street: '789 Creative Lane',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      country: 'USA'
    },
    emergencyContact: {
      name: 'James Davis',
      relationship: 'Spouse',
      phone: '+1-555-0134'
    }
  },
  {
    _id: '7',
    employeeId: 'EMP007',
    firstName: 'David',
    lastName: 'Miller',
    email: 'david.miller@company.com',
    phone: '+1-555-0135',
    department: 'Sales',
    position: 'Account Manager',
    hireDate: new Date('2021-12-15'),
    salary: 68000,
    status: 'active',
    address: {
      street: '321 Sales Road',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Jennifer Miller',
      relationship: 'Spouse',
      phone: '+1-555-0136'
    }
  },
  {
    _id: '8',
    employeeId: 'EMP008',
    firstName: 'Lisa',
    lastName: 'Garcia',
    email: 'lisa.garcia@company.com',
    phone: '+1-555-0137',
    department: 'Finance',
    position: 'Financial Analyst',
    hireDate: new Date('2022-09-05'),
    salary: 62000,
    status: 'active',
    address: {
      street: '456 Finance Blvd',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Carlos Garcia',
      relationship: 'Spouse',
      phone: '+1-555-0138'
    }
  },
  {
    _id: '9',
    employeeId: 'EMP009',
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james.wilson@company.com',
    phone: '+1-555-0139',
    department: 'Engineering',
    position: 'Mechanical Engineer',
    hireDate: new Date('2023-02-28'),
    salary: 78000,
    status: 'active',
    address: {
      street: '789 Engineering Way',
      city: 'Denver',
      state: 'CO',
      zipCode: '80201',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Mary Wilson',
      relationship: 'Spouse',
      phone: '+1-555-0140'
    }
  },
  {
    _id: '10',
    employeeId: 'EMP010',
    firstName: 'Jennifer',
    lastName: 'Anderson',
    email: 'jennifer.anderson@company.com',
    phone: '+1-555-0141',
    department: 'HR',
    position: 'Recruiter',
    hireDate: new Date('2022-07-12'),
    salary: 54000,
    status: 'active',
    address: {
      street: '123 HR Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Michael Anderson',
      relationship: 'Spouse',
      phone: '+1-555-0142'
    }
  },
  {
    _id: '11',
    employeeId: 'EMP011',
    firstName: 'Michael',
    lastName: 'Taylor',
    email: 'michael.taylor@company.com',
    phone: '+1-555-0143',
    department: 'IT',
    position: 'System Administrator',
    hireDate: new Date('2022-04-18'),
    salary: 68000,
    status: 'active',
    address: {
      street: '456 Tech Lane',
      city: 'Boston',
      state: 'MA',
      zipCode: '02101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Amanda Taylor',
      relationship: 'Spouse',
      phone: '+1-555-0144'
    }
  },
  {
    _id: '12',
    employeeId: 'EMP012',
    firstName: 'Amanda',
    lastName: 'Martinez',
    email: 'amanda.martinez@company.com',
    phone: '+1-555-0145',
    department: 'Marketing',
    position: 'SEO Specialist',
    hireDate: new Date('2023-05-12'),
    salary: 52000,
    status: 'active',
    address: {
      street: '789 Marketing Ave',
      city: 'Nashville',
      state: 'TN',
      zipCode: '37201',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Carlos Martinez',
      relationship: 'Spouse',
      phone: '+1-555-0146'
    }
  },
  {
    _id: '13',
    employeeId: 'EMP013',
    firstName: 'Christopher',
    lastName: 'Lee',
    email: 'christopher.lee@company.com',
    phone: '+1-555-0147',
    department: 'Sales',
    position: 'Sales Director',
    hireDate: new Date('2021-10-03'),
    salary: 85000,
    status: 'active',
    address: {
      street: '321 Sales Blvd',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Sophie Lee',
      relationship: 'Spouse',
      phone: '+1-555-0148'
    }
  },
  {
    _id: '14',
    employeeId: 'EMP014',
    firstName: 'Sophie',
    lastName: 'Clark',
    email: 'sophie.clark@company.com',
    phone: '+1-555-0149',
    department: 'Finance',
    position: 'Accountant',
    hireDate: new Date('2022-12-20'),
    salary: 58000,
    status: 'active',
    address: {
      street: '654 Finance Road',
      city: 'Las Vegas',
      state: 'NV',
      zipCode: '89101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Robert Clark',
      relationship: 'Spouse',
      phone: '+1-555-0150'
    }
  },
  {
    _id: '15',
    employeeId: 'EMP015',
    firstName: 'Daniel',
    lastName: 'White',
    email: 'daniel.white@company.com',
    phone: '+1-555-0151',
    department: 'Engineering',
    position: 'Electrical Engineer',
    hireDate: new Date('2023-01-15'),
    salary: 76000,
    status: 'active',
    address: {
      street: '987 Engineering St',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30301',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Emma White',
      relationship: 'Spouse',
      phone: '+1-555-0152'
    }
  },
  {
    _id: '16',
    employeeId: 'EMP016',
    firstName: 'Emma',
    lastName: 'Thompson',
    email: 'emma.thompson@company.com',
    phone: '+1-555-0153',
    department: 'HR',
    position: 'Training Coordinator',
    hireDate: new Date('2022-08-30'),
    salary: 48000,
    status: 'active',
    address: {
      street: '147 HR Circle',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'William Thompson',
      relationship: 'Spouse',
      phone: '+1-555-0154'
    }
  },
  {
    _id: '17',
    employeeId: 'EMP017',
    firstName: 'William',
    lastName: 'Harris',
    email: 'william.harris@company.com',
    phone: '+1-555-0155',
    department: 'IT',
    position: 'DevOps Engineer',
    hireDate: new Date('2023-06-08'),
    salary: 82000,
    status: 'active',
    address: {
      street: '258 DevOps Way',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Olivia Harris',
      relationship: 'Spouse',
      phone: '+1-555-0156'
    }
  },
  {
    _id: '18',
    employeeId: 'EMP018',
    firstName: 'Olivia',
    lastName: 'Lewis',
    email: 'olivia.lewis@company.com',
    phone: '+1-555-0157',
    department: 'Marketing',
    position: 'Brand Manager',
    hireDate: new Date('2022-03-14'),
    salary: 72000,
    status: 'active',
    address: {
      street: '369 Brand Street',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Ethan Lewis',
      relationship: 'Spouse',
      phone: '+1-555-0158'
    }
  },
  {
    _id: '19',
    employeeId: 'EMP019',
    firstName: 'Ethan',
    lastName: 'Robinson',
    email: 'ethan.robinson@company.com',
    phone: '+1-555-0159',
    department: 'Sales',
    position: 'Business Development',
    hireDate: new Date('2023-04-22'),
    salary: 65000,
    status: 'active',
    address: {
      street: '741 Business Ave',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Ava Robinson',
      relationship: 'Spouse',
      phone: '+1-555-0160'
    }
  },
  {
    _id: '20',
    employeeId: 'EMP020',
    firstName: 'Ava',
    lastName: 'Walker',
    email: 'ava.walker@company.com',
    phone: '+1-555-0161',
    department: 'Finance',
    position: 'Budget Analyst',
    hireDate: new Date('2022-11-08'),
    salary: 61000,
    status: 'active',
    address: {
      street: '852 Budget Lane',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95101',
      country: 'USA'
    },
    emergencyContact: {
      name: 'Noah Walker',
      relationship: 'Spouse',
      phone: '+1-555-0162'
    }
  }
]
