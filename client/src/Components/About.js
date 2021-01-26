import logo from '../imgages/sos3.png';
import '../css/about.css';

function About() {
    return (
        <div>
            <div className='title'>О проекте:</div>
            <div className='container'>
                <span className='txt_about'>
                    Проект был создан для регулирования процесса, проверки блоков,а также связи со студентами 
                </span>
            </div>
            <p className='fig'><img src={logo} alt='log0' className='logoInFooter' /></p>
        </div>
    )
}

export default About;