import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ProfilePic from '../images/Profile.png';

function Home() {

    function goLinkedIn() {
        window.location.href = "https://www.linkedin.com/in/henry-yun/"
    }

    function goGitHub() {
        window.location.href = "https://github.com/henryyun1996"
    }

    function goGmail() {
        window.location.href = "mailto:henrysungyun@gmail.com"
    }

  return (
    <div>
      <div style={{ backgroundColor: '#f1ebcd', padding: '2% 0 2% 0' }}>
        <NavBar style={{ position: 'relative', zIndex: 2 }} />
      </div>
      <div
        style={{
          background: '#f1ebcd',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          paddingTop: '2%',
          minHeight: '80vh',
          zIndex: 1,
        }}
      >
        <img
          alt='Henry Profile Pic'
          src={ProfilePic}
          className="ui fluid image"
          style={{
            display: 'block',
            margin: '5% 0 0 15%',
            width: '90%',
            maxWidth: '450px',
            height: 'auto',
            borderRadius: '100%',
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <div>
          <h2
            style={{
              color: 'black',
              position: 'absolute',
              fontSize: '3vw',
              top: '35%',
              left: '54%',
              textAlign: 'center',
              fontFamily: 'Nexa Light',
              zIndex: 2,
            }}
          >
            Software Engineer
            <br/>
            Korean-American
            <br/>
            Dog Dad
          </h2>
        </div>
        <div
              id="badges"
              style={{
                position: 'absolute',
                top: '60%',
                left: '57%',
                zIndex: 2,
              }}
            >
              <br />
              <h2 style={{ textAlign: 'center', color: 'black', fontFamily: 'Nexa Light' }}>Let's Connect!</h2>
              <button className="ui linkedin button" onClick={goLinkedIn}>
                  <i className="linkedin icon"></i>
                  LinkedIn
              </button>
              <button className=" ui github button" onClick={goGitHub} style={{ backgroundColor: 'black', color: 'white' }}>
                  <i className="github icon"></i>
                      GitHub
              </button>
              <button className="ui gmail button" onClick={goGmail}>
              <i className="google icon" style={{ color: '#DB4437' }}></i>
                  <span>
                      Gmail
                  </span>
              </button>
            </div>
      </div>
      <div>
        <Footer style={{ position: 'relative', zIndex: 2 }} />
      </div>
    </div>
  );
}

export default Home;

//`rgba(0, 0, 0, .8) url(${Background}) no-repeat center center fixed`