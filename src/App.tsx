import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BasicForm from './components/BasicForm/BasicForm.component';
import EmailForm from './components/EmailForm/EmailForm.component';
import PasswordForm from './components/PasswordForm/PasswordForm.component';
import AgeForm from './components/AgeForm/AgeForm.component';
import GenderForm from './components/GenderForm/GenderForm.component';
import AgreementForm from './components/AgreementForm/AgreementForm.component';
import URLForm from './components/URLForm/URLForm.component';
import PhoneForm from './components/PhoneForm/PhoneForm.component';
import AddressForm from './components/AddressForm/AddressForm.component';
import TagsForm from './components/TagsForm/TagsForm.component';
import Home from './components/Home/Home.component';

function App() {
  return (
    <div className="dark:bg-slate-700 dark:text-white h-full">
      <Router>
        <nav className="p-4 bg-gray-200 flex align-center justify-center dark:bg-slate-800 ">
          <ul className="flex gap-4 items-center">
            <li className="text-slate-800 dark:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/basic">Basic Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/email">Email Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/password">Password Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/age">Age Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/gender">Gender Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/agreement">Agreement Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/url">URL Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/phone">Phone Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/address">Address Form</Link>
            </li>
            <li className="text-slate-800 dark:text-white">
              <Link to="/tags">Tags Form</Link>
            </li>
          </ul>
        </nav>
        <div className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic" element={<BasicForm />} />
            <Route path="/email" element={<EmailForm />} />
            <Route path="/password" element={<PasswordForm />} />
            <Route path="/age" element={<AgeForm />} />
            <Route path="/gender" element={<GenderForm />} />
            <Route path="/agreement" element={<AgreementForm />} />
            <Route path="/url" element={<URLForm />} />
            <Route path="/phone" element={<PhoneForm />} />
            <Route path="/address" element={<AddressForm />} />
            <Route path="/tags" element={<TagsForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
