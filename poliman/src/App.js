import Navbar from './components/usercomponents/Navbar';
import About from './components/usercomponents/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/usercomponents/Signin';
import Login from './components/usercomponents/Login';
import Home from './components/commoncomponents/Home';
import Protectedroutes from './components/usercomponents/Protectedroutes';
import Work from './components/usercomponents/Work';
import Decide from './components/commoncomponents/Decide';
import { AuthenticationProvider } from './components/globalstates/Authentication';
import Update from './components/usercomponents/Update';
import { Alertprovider } from './components/globalstates/Alertmessage';
import Adminlogin from './components/admincomponents/Adminlogin';
import Adminnavbar from './components/admincomponents/Adminnavbar';
import Politicians from './components/admincomponents/Politicians';
import Addwork from './components/admincomponents/Addwork';
import Users from './components/admincomponents/Users';
import Search from './components/usercomponents/Search';
import { UserProvider } from './components/globalstates/Usersearch';
import { AdminauthenticateProvider } from './components/globalstates/Adminauthenticate';
import Adminsearch from './components/admincomponents/Adminsearch';
import Adminprotectedroutes from './components/admincomponents/Adminprotectedroutes';
import { AdmindataProvider } from './components/globalstates/Adminget';
import Footer from './components/commoncomponents/Footer';

function App() {
  return (
    <>
      <AuthenticationProvider>
        <AdminauthenticateProvider>
          <Alertprovider>
            <UserProvider>
              <AdmindataProvider>
                <BrowserRouter>
                  <Routes>
                    <Route element={<Protectedroutes />}>
                      <Route element={<><div><Navbar /></div>
                        <div><Home /></div>
                        <div><Footer/></div></>} path='/userhome' />
                      <Route element={<><div><Navbar /></div>
                        <div className='container my-4'><About /></div>
                        <div><Footer/></div></>} path='/userabout' />
                      <Route element={<><div><Navbar /></div>
                        <div><Work /></div>
                        <div><Footer/></div></>} path='/userwork' />
                      <Route element={<><div><Navbar /></div>
                        <div><Update /></div>
                        <div><Footer/></div></>} path='/userupdate' />
                      <Route element={<><div><Navbar /></div>
                        <div><Search /></div>
                        <div><Footer/></div></>} path='/usersearch' />
                    </Route>
                    <Route element={<>
                      <div><Login /></div>
                    </>} path='/userlogin' />
                    <Route element={<>
                      <div><Signin /></div>
                    </>} path='/usersignin' />
                    <Route element={<>
                      <div><Decide /></div>
                    </>} path='/' />
                    <Route element={<>
                      <div><Adminlogin /></div>
                    </>} path='/adminlogin' />
                    <Route element={<Adminprotectedroutes />}>
                      <Route element={<><div><Adminnavbar /></div>
                        <div><Home /></div>
                        <div><Footer/></div></>} path='/adminhome' />
                      <Route element={<><div><Adminnavbar /></div>
                        <div><Politicians /></div>
                        <div><Footer/></div></>} path='/adminpoliticians' />
                      <Route element={<><div><Adminnavbar /></div>
                        <div><Addwork /></div>
                        <div><Footer/></div></>} path='/adminpoliticians/add' />
                      <Route element={<><div><Adminnavbar /></div>
                        <div><Users /></div>
                        <div><Footer/></div></>} path='/adminusers' />
                      <Route element={<><div><Adminnavbar /></div>
                        <div><Adminsearch /></div>
                        <div><Footer/></div></>} path='/adminsearch' />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </AdmindataProvider>
            </UserProvider>
          </Alertprovider>
        </AdminauthenticateProvider>
      </AuthenticationProvider>
    </>
  );
}

export default App;
