import { Footer, Header } from './components/index';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';


function App() {
  return (
    <div className='bg-orange-300 dark:bg-slate-500'>
     <Header />
         <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
