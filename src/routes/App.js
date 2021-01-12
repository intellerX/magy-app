import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import LoginProfe from '../containers/LoginProfe';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';
import Info from '../containers/Info';
import Services from '../containers/Services';
import Notices from '../containers/Notices';
import Galery from '../containers/Galery';
import Admin from '../containers/Admin';
import Inicio from '../containers/Inicio';
import Profe from '../containers/Profe';
import Perfil from '../containers/Perfil';

const App = () => (
  <BrowserRouter>

    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/loginprofe' component={LoginProfe} />

        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/servicios' component={Services} />
        <Route exact path='/notices' component={Notices} />
        <Route exact path='/galeria' component={Galery} />
        <Route exact path='/administrador' component={Admin} />
        <Route exact path='/inicio' component={Inicio} />
        <Route exact path='/profe' component={Profe} />
        <Route exact path='/perfil' component={Perfil} />


        <Route component={NotFound} />
      </Switch>
    </Layout>

  </BrowserRouter>
);

export default App;
