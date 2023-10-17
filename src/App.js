import {Component} from 'react'
import Reviewco from './Reviewco'
import './App.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]
class App extends Component{
  
  state={
    count:0
  }
  onClickLeft=()=>{
    const{count}=this.state
    if(count<=0){
      this.setState({
          count:0
      })
    }
    else{
      this.setState((prevstate)=>({
        count:prevstate.count-1
      }))
    }
  }
  onClickRight=()=>{
    const {count}=this.state
    const leng=(reviewsList.length)-1
    if(count===leng){
      this.setState({
          count:leng
      })
    }
    else if(count>leng){
      this.setState({
        count:0
      })
  }
    else{
      this.setState((prevstate)=>({
        count:prevstate.count+1
      }))
    }
  }
  
   
  
  render(){
    const{count}=this.state
    console.log(reviewsList[count])
    
    return(
      <div className='main'>
        
      <div className='container'>
        
      <div className='inner'>
      
      <div class="one">
      <button onClick={this.onClickLeft} className='but'><img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"/></button>
      </div>
      <div className='two'>
      <Reviewco reviewdetails={reviewsList[count]}/>
      </div>
      <div className='three'>
      <button onClick={this.onClickRight} className='but'><img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"/></button>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
export default App