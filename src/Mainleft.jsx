import './Mainleft.css'
import { GoArrowUpRight } from "react-icons/go";


const Mainleft = () => {
  return (
    <div className='container-left'>
        <div className='container-text'>
        <h1 style={{fontSize:'3rem',fontWeight:'600'}}>Stunning <br />Creative Minds.</h1>
        <p style={{fontSize:'0.6rem',fontWeight:'300'}}>With <b>Minds</b> remote teams can organise projects, manage <br /> shifting properties, and get work done.</p>
        <button className='button'>Get More<GoArrowUpRight style={{ color: '#fff', fontSize: '1em',marginLeft:'10px'}} /></button>
        </div>

        <div className="balls">
        <div className="skill-bars">
        <div className="skill1">
            <div className="skill-label">Photoshop Design</div>
            <div className="skill-bar1 photoshop">
                <div className="skill-ball1"></div>
            </div>
        </div>
        <div className="skill2">
            <div className="skill-label">Brand experiences</div>
            <div className="skill-bar2 brand">
                <div className="skill-ball2"></div>
            </div>
        </div>
        <div className="skill3">
            <div className="skill-label">Mobile Development</div>
            <div className="skill-bar3 mobile">
                <div className="skill-ball3"></div>
            </div>
        </div>
    </div>
        </div>
        

    </div>
  )
}

export default Mainleft