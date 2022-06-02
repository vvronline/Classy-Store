import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/styles';

export default function Layout({ title, children, description }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title}-Classy Store` : 'Classy Store'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Classy Store</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved @vvronline</Typography>
      </footer>
    </div>
  );
}
