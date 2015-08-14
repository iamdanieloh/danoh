var React = require('react');
var Layout = require('./layout');



var Homepage = React.createClass({
  render: function() {
    return (
      <Layout>
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">&lt;Code/&gt;</h3>

            </div>
          </div>


<header>


      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I am <span className="color1">Daniel Oh</span></h1>
            <h3 className="info">I'm a <span className="color3">Web Developer</span> and <span className="color3">Geek <i className="fa fa-rebel"></i></span>.</h3>
            <h3>I love Music, all things Sci-fi, Fishing, and of course, Code.</h3>
            <hr />
            <ul className="social">
   
               <li><a href="https://twitter.com/danieloh84"><i className="fa fa-twitter"></i></a></li> 
               <li><a href="https://www.linkedin.com/in/danieloh612"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="https://github.com/iamdanieloh"><i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>


   </header>






          <div className="mastfoot">
            <div className="inner">
              <p><a href="http://madewithloveinbaltimore.org">Made with <span className="color2">&hearts;</span> in Baltimore</a>, by <a href="https://twitter.com/danieloh84">@danieloh84</a>.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
      </Layout>
    );
  }
})



module.exports = Homepage;