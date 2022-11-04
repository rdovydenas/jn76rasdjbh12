import { View } from 'react-native';
import React from 'react';
import Menu from '../../components/Menu';

const Dashboard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#F2F5FF',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 60,
          backgroundColor: '#DFB2F4',
        }}
      >
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </View>
    </View>
  );
};

export default Dashboard;
