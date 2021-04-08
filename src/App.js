import React from 'react';

 export class App extends React.Component{

  constructor(){
    super();
    this.state = {
      users : null
    }
  }

  componentDidMount(){
    fetch('http://reqres.in/api/users?page=2').then((resp)=>{
      resp.json().then((result)=>{
        //console.warn(result.data)
        this.setState({users:result.data})
      })
    })
  }

  render(){
    return(
      <div>
        <h1>
          Calling Of API Using Fetch Function
        </h1>
        {
          this.state.users ?
          this.state.users.map((item,i)=>
          <div><p>
            {i}--- 
          {item.first_name}  
          {item.last_name}
          ------
          {item.email}
          
          </p>
          </div>
          )
          : 
          null
        }
      </div>
    )
  }
}

export default App;