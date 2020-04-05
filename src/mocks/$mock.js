/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './todos/index'

export default (client) => mockServer([
  {
    path: '/todos',
    methods: mock0
  }
], client, '')
