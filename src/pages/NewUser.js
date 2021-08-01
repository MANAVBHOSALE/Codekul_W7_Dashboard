import React, { useState } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import './index.css';
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import AuthSocial from '../components/authentication/AuthSocial';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));
const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function NewUser() {
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    company: '',
    role: '',
    verified: '',
    status: ''
  });
  const handleInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const [records, setRecords] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
    setUserRegistration({ username: '', company: '', role: '', verified: '', status: '' });
  };
  return (
    <>
      <RootStyle title="New User | Minimal-UI">
        <MHidden width="mdDown">
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Insert the new user here.
            </Typography>
            <img alt="register" src="/static/illustrations/illustration_register.png" />
          </SectionStyle>
        </MHidden>
        <Container>
          <ContentStyle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Get started absolutely free.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Free forever. No credit card needed.
              </Typography>
              <AuthSocial />
              <Stack spacing={3}>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      autoComplete="off"
                      value={userRegistration.username}
                      onChange={handleInput}
                      name="username"
                      id="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="company">company</label>
                    <input
                      type="text"
                      autoComplete="off"
                      value={userRegistration.company}
                      onChange={handleInput}
                      name="company"
                      id="company"
                    />
                  </div>
                  <div>
                    <label htmlFor="role">role</label>
                    <input
                      type="text"
                      autoComplete="off"
                      value={userRegistration.role}
                      onChange={handleInput}
                      name="role"
                      id="role"
                    />
                  </div>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <div>
                      <label htmlFor="verified">verified</label>
                      <input
                        type="text"
                        autoComplete="off"
                        value={userRegistration.verified}
                        onChange={handleInput}
                        name="verified"
                        id="verified"
                      />
                    </div>
                    <div>
                      <label htmlFor="status">status</label>
                      <input
                        type="text"
                        autoComplete="off"
                        value={userRegistration.status}
                        onChange={handleInput}
                        name="status"
                        id="status"
                      />
                    </div>
                  </Stack>
                  <Button variant="contained" color="primary" href="#" type="submit">
                    Submit
                  </Button>
                </form>
              </Stack>
            </Box>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
