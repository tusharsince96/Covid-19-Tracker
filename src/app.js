import React, {Component} from 'react';
import Cards from './components/cards/cards.jsx';
import Styles from './app.module.css';
import Chart from './components/chart/chart';
import CountryPicker from './components/countryPicker/countryPicker';
import Navbar from './ComponentNew/Navbar/Navbar';
import Footer from './ComponentNew/Footer/Footer'
import CoronaImage from './images/image.png';
import { fetchData } from './api';


class App extends Component {

state = {
    data: {},
    country:'',
}

   async componentDidMount(){
       const fetcheddata = await fetchData();
 
      this.setState({ data: fetcheddata });
   };
handleCountryChange = async (country) =>{
   
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country:country });
    
    

}
    render(){

        const { data,country } = this.state;
       
         
        return(
            <div>
            <Navbar/>
            <div className={Styles.Container}>
            
            <img className={Styles.image}src={CoronaImage} alt="COVID-19"/>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart  data={data} country={country}/>
            

            <Footer/>
            
            </div> 
            </div>
            
            
        )
    }
}

export default App;