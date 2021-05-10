import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';


let redirectUrl = Linking.createURL('path/into/app', {
    queryParams: { hello: 'world' },
  });

const ReportScreen = ({
    params,
}) => (
<script>window.location.replace("www.google.com");</script>
);

export default redirectUrl;
