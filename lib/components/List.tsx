import React, {PropsWithChildren} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CommonStyles from '../CommonStyles';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    padding: 10,
  },
  listItemText: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '70%',
  },
  listItemAction: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '30%',
  },
});

export default function List() {
  return <></>;
}

export function ListItem({children}: PropsWithChildren) {
  return <View style={[CommonStyles.flexRow, styles.flex]}>{children}</View>;
}

export function ListText({children}: PropsWithChildren) {
  return <Text style={styles.listItemText}>{children}</Text>;
}

export function ListAction({children}: PropsWithChildren) {
  return <View style={styles.listItemAction}>{children}</View>;
}

export function ListItemWithAction({renderText, renderAction}) {
  return (
    <ListItem>
      <ListText>{renderText()}</ListText>
      <ListAction>{renderAction()}</ListAction>
    </ListItem>
  );
}
