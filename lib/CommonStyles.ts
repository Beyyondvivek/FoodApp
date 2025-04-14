import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    fontSize: 15,
    color: 'red',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    padding: 20,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
    padding: 10,
  },
  container: {
    backgroundColor: 'white',
    margin: 38,
  },
  imagestyle: {
    width: 100,
    height: 100,
    marginTop: 20,

    borderRadius: 94,

    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  IconLogo: {
    width: 12,
    height: 12,
    marginTop: 10,
  },
  inputView: {
    marginLeft: 0,
  },
  inputText: {
    fontSize: 14,
    fontWeight: 'normal',
    padding: 12,
    opacity: 0.5,
  },

  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },

  inputBox: {
    marginTop: 6,
    width: 350,
    height: 50,
    borderWidth: 0.5,
    // borderBottomColor: '#D7D7D7',
    backgroundColor: 'white',
    fontSize: 12,
    borderRadius: 6,
  },
  Box: {
    marginTop: 6,
    width: 100,
    marginLeft: 20,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 4,

    backgroundColor: '#F2F2F2',
    borderStyle: 'solid',
  },
  appButtonContainer: {
    backgroundColor: '#fd4e00',
    marginTop: 30,
    // marginLeft: 100,
    borderRadius: 6,
    paddingVertical: 10,
    // paddingHorizontal: 12,
    width: 350,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
