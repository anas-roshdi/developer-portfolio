import devoCover from '../../public/projects/devo/devo-cover.png';

export const projectsData = [
  {
    id: 1,
    name: 'Devo - Unified Business Management System',
    description: "Developed a modular desktop application for business and inventory management. The system features a dynamic invoicing module, automated financial reporting, and real-time data export using Pandas. Recently integrated AI-driven financial forecasting using Scikit-learn and NumPy, alongside interactive sales visualizations with Matplotlib for advanced analytics.",
    tools: ['Python', 'Tkinter', 'SQLite', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Git'],
    role: 'Software Engineer',
    code: 'https://github.com/anas-roshdi/devo', 
    demo: '', 
    // Devo project images
    images: [
      '/projects/devo/devo-cover.png', 
      '/projects/devo/Homepage.png', 
      '/projects/devo/ProductManagment.png', 
      '/projects/devo/CustomerManagment.png', 
      '/projects/devo/SalesInvoice.png', 
      '/projects/devo/PurchaseInvoice.png', 
      '/projects/devo/Report.png', 
      '/projects/devo/Report2.png', 
      '/projects/devo/TopProducts.png'
    ],
  },
  {
    id: 2,
    name: 'Smart Attendance System (NFC)',
    description: "My Graduation Project: Developed an automated attendance system using NFC technology and Java. The system streamlines the process of tracking student attendance with high accuracy and provides real-time data for school administration.",
    tools: ['Java', 'NFC Technology', 'SQL Server', 'Android Studio'],
    role: 'Lead Developer',
    code: 'https://github.com/anas-roshdi/Smart_attendance_system', 
    demo: '',
    // NFC Attendance system images
    images: [
      '/projects/nfc-attendance/login.jpg', 
      '/projects/nfc-attendance/nfc-scan-1.jpg', 
      '/projects/nfc-attendance/nfc-scan-2.jpg', 
      '/projects/nfc-attendance/nfc-scan-3.jpg', 
      '/projects/nfc-attendance/add-course.jpg',
      '/projects/nfc-attendance/edit-student.jpg'
    ], 
  },
  {
    id: 3,
    name: 'E-Plant Shopping App',
    description: "Created a responsive E-commerce front-end application for a plant nursery. Used React and Redux Toolkit for state management, focusing on a seamless user experience and modern UI design.",
    tools: ['React', 'Redux', 'Tailwind CSS', 'Vite'],
    role: 'Front-End Developer',
    code: 'https://github.com/anas-roshdi/e-plantShopping',
    demo: 'https://anas-roshdi.github.io/e-plantShopping/',
    // Images will be added here later
    images: ['/projects/e-plant/Start.png', 
        '/projects/e-plant/Home.png', 
      '/projects/e-plant/Cart.png'], 
  },
  {
    id: 4,
    name: 'Arabic Character Recognition',
    description: "Designed a Machine Learning model to recognize handwritten Arabic characters. I utilized Deep Learning techniques and the VGG16 architecture to achieve high classification accuracy.",
    tools: ['Python', 'TensorFlow', 'Keras', 'Computer Vision'],
    role: 'AI Developer',
    code: 'https://github.com/anas-roshdi/Arabic-character-recognition',
    demo: '',
    // Backend/ML project, currently no UI screenshots
    images: [], 
  },
  {
    id: 5,
    name: 'Express Book Reviews API',
    description: "Built a robust RESTful API for book reviews. I implemented JWT for secure authentication and session-based access control. The project focused on CRUD operations and optimizing backend performance using Node.js and Express.",
    tools: ['Node.js', 'Express', 'JWT', 'Postman', 'JavaScript'],
    role: 'Backend Developer',
    code: 'https://github.com/anas-roshdi/expressBookReviews',
    demo: '',
    // Backend project, currently no UI screenshots
    images: [], 
  }
];