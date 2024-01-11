import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: '#2db7e2',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomStartRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    backgroundImage: 'linear-gradient(166deg, #65bf2b, #00a7ce)',
    boxShadow: '0.872px 9.962px 20px 0px rgb(12 78 165 / 30%)',
    WebkitBoxShadow: '0.872px 9.962px 20px 0px rgb(12 78 165 / 30%)',
    borderRadius: 50,
    Display: 'inline-block',
    width: 200,
    height: 50,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    paddingBottom: 11,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: "Baloo-Regular",
    fontSize: 17
  },
});

export default styles;
