import JavaScriptSkillsImg from '../../assets/JavaScriptSkills.PNG';
import ConsoleResultImg from '../../assets/ConsoleResult.PNG';

function JavaScriptSkillsPage () {

    const users = [
        {
            name: "Amie Massey",
            age: 59,
            isMarried: true,
        },
        {
            name: "Cora Rowland",
            age: 37,
            isMarried: false,
        },
        {
            name: "Alesha Ferrell",
            age: 23,
            isMarried: true,
        },
        {
            name: "Kyla Chan",
            age: 47,
            isMarried: true,
        },
    ]
    
    const filterUserMarried = users.filter(function (users) { return users.isMarried === true });
    const printUsersMarried =  JSON.stringify(filterUserMarried, null, 4);
    console.log('These are the Married people:\n', printUsersMarried); // Answer

    const filterUserNotMarried = users.filter(function (users) { return users.isMarried === false });
    console.log('TotalisNotMarried:', filterUserNotMarried.length); // Answer

    return (
        <>
            <div className="container">
                <div className="my-4">
                    <h2>Testing out your Javascript Skills</h2>
                </div>
                <div>
                    <div className='mb-4'>
                        <h3 className='mb-2'>Solution:</h3><img src={JavaScriptSkillsImg} width='100%' alt='solution-img' />
                    </div>
                    <div className='mb-4'>
                        <h3 className='mb-2'>Result:</h3><img src={ConsoleResultImg} width='100%' alt='result-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default JavaScriptSkillsPage;
