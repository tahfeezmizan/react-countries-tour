import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name} = country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
        </div>
    );
};

export default Country;