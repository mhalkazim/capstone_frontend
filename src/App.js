import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LayoutRoute from './LayoutRoute.js'
import HomeScreen from './HomeScreen.js'
import UsersLoginScreen from './UsersLoginScreen.js'
import UsersSignupScreen from './UsersSignupScreen.js'
import UsersEditDetails from './UsersEditDetails.js'
import UsersChangePassword from './UsersChangePassword.js'
import ProfileScreen from './ProfileScreen.js'

const theme = createTheme(
  {
    typography: {
      fontFamily: 'Raleway',
    },
  }
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <LayoutRoute path="/" exact={true} component={HomeScreen} />
          <LayoutRoute path="/login" exact={true} component={UsersLoginScreen} />
          <LayoutRoute path="/signup" exact={true} component={UsersSignupScreen} />
          <LayoutRoute path="/edit-users" exact={true} component={UsersEditDetails} />
          <LayoutRoute path="/edit-password-users" exact={true} component={UsersChangePassword} />
          <LayoutRoute path="/profile-page" exact={true} component={ProfileScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
