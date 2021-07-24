import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <ThemeProvider>
     <Helmet>
      <meta charset="utf-8" data-react-helmet="true" />
          <meta name="title" content="React Boilerplate | Toggle Language and Darkmode with this Login Boilerplate" property="og:title"  data-react-helmet="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color"  data-react-helmet="true" />

          <meta name="image" property="og:image" content="https://image.prntscr.com/image/CBiq_E3wTmSNIpa0R_N44g.png"  data-react-helmet="true" />
          <meta name="url" property="og:url" content="https:www.mycodedojo.com"  data-react-helmet="true"/>
          <meta name="description" property="og:description"  content="This is a Demo of a React Boilerplate that uses Context with Hooks to create a functional component and can Toggle Darkmode and Switch Between Different Languages " data-react-helmet="true" />
          <meta name="author" property="og:author" content="Michael Cooper"  data-react-helmet="true"/>

          <meta name="publish_date" property="og:publish_date" content="2021-07-24T00:00:00-0600"  data-react-helmet="true"/>
          <title>React Boilerplate | Toggle Language and Darkmode with this Login Boilerplate</title>
    </Helmet>


      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}