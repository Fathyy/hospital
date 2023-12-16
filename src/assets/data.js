import  {magnifyinGglassSolid, prescriptionBottleSolid, clipboardRegular, chartColumnSolid, usersSolid, 
    suitcaseMedicalSolid, profile, medicine, medicine2, doctorBanner} from './index';

const data = [
    {
        id: 1,
        image: magnifyinGglassSolid,
        heading: 'Search Doctor',
        description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },

    {
        id: 2,
        image: usersSolid,
        heading: 'Consultation',
        description: 'Free consultation with our trusted doctors and get the best recomendations'
    },

    {
        id: 3,
        image: prescriptionBottleSolid,
        heading: 'Online pharmacy',
        description: 'Buy  your medicines with our mobile application with a simple delivery system'
    },

    {
        id: 4,
        image: clipboardRegular,
        heading: 'Details info',
        description: 'Free consultation with our trusted doctors and get the best recomendations'
    },

    {
        id: 5,
        image: suitcaseMedicalSolid,
        heading: 'Emergency care',
        description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },

    {
        id: 6,
        image: chartColumnSolid,
        heading: 'Tracking',
        description: 'Track and save your medical history and health data'
    },
];

const testimonials = [
    {
        id: 1,
      name: 'John Doe',
      designation: 'CEO',
      image: profile, // Replace with the actual image URL or file path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
      name: 'Jane Smith',
      designation: 'Marketing Manager',
      image: profile, // Replace with the actual image URL or file path
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
      name: 'Bob Johnson',
      designation: 'CTO',
      image: profile, // Replace with the actual image URL or file path
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const articles = [
    {
        id: 1,
        image: medicine,
        heading: 'Disease detection, check up in the laboratory',
        description: 'In this case, the role of the health laboratory is very important to do a disease detection...'
    },
    {
        id: 2,
        image: medicine2,
        heading: 'Herbal medicines that are safe for consumption',
        description: 'Herbal medicine is very widely used at this time because of its very good for your health...'
    },
    {
        id: 3,
        image: doctorBanner,
        heading: 'Natural care for healthy facial skin',
        description: 'A healthy lifestyle should start from now and also for your skin health.There are some...'
    }

];
export { data, testimonials, articles };