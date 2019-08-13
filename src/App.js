import React from 'react';
import Title from './Components/Title';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/contracts/dc89ff49-8449-11e7-ac1d-3c52820efd20", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => response.json())
      .then(data => this.setState({data: data}))
  }


  render(){
    if(this.state.data !== null && this.state.data.attributes){
      const { attributes } = this.state.data;
      return(
        <Title title={attributes.name}/>
      )
    } else {
      return <Title title={""}/>
    }
  }
}

export default App;
