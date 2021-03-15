import logo from '../imgages/sos3.png';


function About() {
    return (
        <div>
            <div >О проекте:</div>
            <div >
                <span >
                    Проект был создан для регулирования процесса, проверки блоков,а также связи со студентами 
                </span>
            </div>
            <p><img src={logo} alt='log0' className='logoInFooter' /></p>
        </div>
    )
}

export default About;