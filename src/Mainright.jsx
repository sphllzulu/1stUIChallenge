import "./Mainright.css";

const Mainright = () => {
  return (
    <div className="container-right">
      <div className="orangeBalls">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="shiny-ball"></div>
      </div>

      {/* Bell and text  */}
      <div className="bell">
        <img
          src="bell.png"
          alt=""
          style={{ width: "60px", height: "60px", transform: 'rotate(-30deg)'}}
        />
        <p style={{ fontWeight: "200", fontSize: "0.7rem" }}>
          500 clients across <br />
          15 countries
        </p>
      </div>

      <div className="cards">
        <div className="card1">
          <img
            src="adrian-Photoroom.png"
            alt="Adrian Lunga"
            className="adrian-image"
          />
          <div className="text-container1">
            <h1>
              ADRIAN <br /> LUNGA
            </h1>
            <small>Founder</small>
            <br />
            <small>Engineering Inc.</small>
          </div>
        </div>

        <div className="card2">
          <div className="text-container2">
            <img src="handshake.png.png" alt="" className="card-image2" />
            <p>
              The quality of their work stands <br /> out the most. They're{" "}
              <br />
              knowledgeable and provide <br /> useful feedback.
            </p>
          </div>
          <img src="hourglass.png" alt="" className="card-image" />
        </div>
        <div className="subscribers-container">
      <div className="profile-images">
        
          <img  src= "avatar.jpg" alt='' className="profile-image" />
          <img  src= "avatar.jpg" alt='' className="profile-image" />
          <img  src= "avatar.jpg" alt='' className="profile-image" />
          <img  src= "avatar.jpg" alt='' className="profile-image" />
        
      </div>
      <p className="subscribers-text"> <b>+21k</b> recruiters have <br/>  already subscribed</p>
    </div>
      </div>
    </div>
  );
};

export default Mainright;
