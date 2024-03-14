import { calculate, mutiply } from '../../utlity/calculate';


const Sunglass = () => {

    const first = 10;
    const second = 5;
    const sum = calculate(first, second);
    console.log(sum);

    const result = mutiply(first, second);
    console.log(result);

    return (
        <div>
            <h2>Do you need anything</h2>
        </div>
    );
};

export default Sunglass;