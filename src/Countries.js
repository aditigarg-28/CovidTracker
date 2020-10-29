import React from "react";
class Countries extends React.Component{
    render(){
        const {countries}=this.props;
    
        return(
            <div>
                <tr>
                <td>{countries.Country}</td>
                <td>{countries.NewConfirmed}</td>
                <td>{countries.TotalConfirmed}</td>
                <td>{countries.NewDeaths}</td>
                <td>{countries.TotalDeaths}</td>
                <td>{countries.TotalRecovered}</td>
                </tr>
            </div>
        );
    }
}
export default Countries;