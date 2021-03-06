#!/usr/bin/env babel-node
// @flow

/* eslint-env node */

/* eslint-disable no-console */

import {renderToString} from 'react-dom/server'
import {JssProvider, SheetsRegistry} from 'react-jss'

const sheets = new SheetsRegistry()

import React from 'react'
import Resume from '../src/Resume'
import data from '../src/data'

const body = renderToString(
  <JssProvider registry={sheets}>
    <Resume data={data} />
  </JssProvider>
)

const staticCss = `
@media not print {
  html {
    padding: 10px;
    background: linear-gradient(to bottom right, #eee, #ddd);
    background-attachment: fixed;
  }
}
@media print {
  html {
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
  }
}
`
console.log('<!DOCTYPE html>')
console.log(renderToString(
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,600" rel="stylesheet" />
      <title>Andy Edwards - Resume</title>
      <style type="text/css">{staticCss}</style>
      <style type="text/css" dangerouslySetInnerHTML={{__html: sheets.toString()}} />
    </head>
    <body dangerouslySetInnerHTML={{__html: body}} />
  </html>
))
