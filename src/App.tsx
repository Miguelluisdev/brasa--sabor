import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Storage from './pages/Storage';
import Login from './pages/Login';
import Barbecuemeter from './pages/Barbecuemeter';
import Register from './pages/Register';
import BaseLayout from './pages/BaseLayout';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';
import ResultBarbecue from './components/ResultBarbecue/ResultBarbecue';
import Step2 from './components/RegisterComponents/Step2';
import Step3 from './components/RegisterComponents/Step3';
import DataUser from './components/Header/DataUser/DataUser';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
    element: <BaseLayout />, 
    errorElement: <ErrorPage /> 
    },
    { path: '/storage',
     element: <Storage />, 
     errorElement: <ErrorPage /> 
    },
    { path: '/login', 
    element: <Login />, 
    errorElement: <ErrorPage /> 
    },
    { path: '/barbecuemeter', 
    element: <Barbecuemeter />, 
    errorElement: <ErrorPage /> 
    },
    { path: '/register',
     element: <Register />, 
     errorElement: <ErrorPage />,
    },
    { path: '/blog',
     element: <Blog />,
      errorElement: <ErrorPage />
    },
    { path: '/result', 
    element: <ResultBarbecue />, 
    errorElement: <ErrorPage />
    },
    { path: '/step2', 
    element: <Step2/>, 
    errorElement: <ErrorPage />
    },
    { path: '/step3', 
    element: <Step3/>, 
    errorElement: <ErrorPage />
    },
    { path: '/dts', 
    element: <DataUser/>, 
    errorElement: <ErrorPage />
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
