import React from 'react';
import data from "./components/data.json"
import Header from './components/header'
import Footer from './components/footer';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: data,
      // animalId: 1
    }
  }
  // state = {
  //   show: false
  // };

  onClose = e => {
    this.props.show = false;
    // this.setState({
    //   animalId: 0
    // })
  };
  showModal = e => {
    this.setState({
      animalId: e.target.value,
      show: !this.state.show
    });
    console.log(e.target.value)
    // console.log(this.state)
    // console.log(this.state.animalData.filter(obj => obj._id === parseInt(this.state.animalId)))
    // console.log(this.state.animalData.filter(obj => obj.id === this.state.animalID))
  };

  render() {
    return (
      <div key='1' >
        <Header />
        <>
          {console.log(this.state.animalId)}
          {console.log(this.state.animalData.filter(animal => (animal._id === parseInt(this.state.animalId)))[0])}
          <Modal onClose={this.onClose} show={this.state.show} animal={data.filter(animal => animal._id === parseInt(this.state.animalId))[0]}>
          </Modal>
        </>
        <Main data={this.state.animalData} showModal={this.showModal} />
        <Footer />
      </div >
    )
  }
}

export default App;


// Array.filter(obj => obj.id === this.state.animalID)