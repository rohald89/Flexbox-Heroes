import Head from 'next/head';
import React from 'react';
import PageWrapper from '../../styles/PageWrapper';
import Playground from '../../components/Previews/Playground';
import PlaygroundSettings from '../../components/Previews/PlaygroundSettings';


export default function PlaygroundPage() {
console.log('PlaygroundPage');
  return (
    <PageWrapper>
      <Head>
        <title>Flexbox Heroes | Playground</title>
        <meta name="title" content="Flexbox Heroes" />
        <meta
          name="description"
          content="Your one stop shop for everything Flexbox CSS properties"
        />
        <meta
          name="keywords"
          content="css, css3, flexbox, grid, layouts, html, layout, playground, challenges, game, learn, education, visualizer, interactive"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <div className="left">
        <h1>Playground</h1>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
        <PlaygroundSettings />
      </div>
      <div className="right">
        <Playground/>
      </div>
    </PageWrapper>
  );
}
