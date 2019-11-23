import React from 'react';
import {
  View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  itemListText, itemListTextStrike, circleActive, circleInactive, deleteIconColor
} from '../utils/colors';

const { height, width } = Dimensions.get('window');
