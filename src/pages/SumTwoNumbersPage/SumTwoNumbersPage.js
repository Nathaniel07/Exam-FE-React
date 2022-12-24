import SumTwoNumbers from '../../shared/utils/SumTwoNumbers.js';
import SumTowNumbersImg from '../../assets/SumTwoNumbersWithout+Sign.PNG';

function SumTwoNumbersPage () {

    let num1 = 1.7;
    let num2 = 4;

    SumTwoNumbers(num1, num2); // SumTwoNumbers Function

    return (
        <>
            <div className="container">
                <div className='my-4'>
                    <h2>Create a Function That Sums Two Number Without Using + Sign</h2>
                </div>
                <div>
                    <div className='mb-4'>
                        <h3 className='mb-2'>Solution:</h3><img src={SumTowNumbersImg} width='100%' alt='solution-img' />
                    </div>
                    <div className='mb-2'>
                        <h4>Other example:</h4> 
                        <code>
                            0.1 + 0.02 = 0.12 <br/>
                            0.1 + 0.2 = 0.3 <br/>
                            1.5 + 0 = 1.5 <br/>
                            1.5 + 2.5 = 4 <br/>
                        </code>
                    </div>
                </div>
            </div>

        </>
    )
};

export default SumTwoNumbersPage;
