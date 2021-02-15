window.domContainer = document.querySelector('#app');

class Navbar extends React.Component {
    render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Vee
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/info">
                      What's that?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/penis">
                      PENIS.
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="/vee/not-gae"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      if you can click this vee is not gae
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      );
    }
  }
  
class Content extends React.Component {
    render() {
        return (
            <div className="mt-4 container">
                <div className="title">
                    <span className="h1">
                        Vee - Homepage
                    </span>
                </div>
                <div className="section-intro lead mb-4">
                    <b>Welcome!</b> This is the homepage of <b>Vee</b> (he did not make it lol)!
                </div>
                <div className="container border rounded my-3 p-4 section-what">
                    <span className="h3">
                        What's that?
                    </span>
                    <div className="section-content">
                        Vee is a human (I think) that is an idiot and really likes to destroy stuff. <a href="/info">Read more...</a>
                    </div>
                </div>
                <div className="container border rounded my-3 p-4 section-penis">
                    <span className="h3">
                        PENIS.
                    </span>
                    <div className="section-content">
                        he does not have that lmao <a href="/penis">Read more...</a>
                    </div>
                </div>
                <div className="container border rounded my-3 p-4 section-help">
                    <span className="h3">
                        You know more about him?
                    </span>
                    <div className="section-content">
                        If you know more about him, please go to <a href="https://github.com/Vee-Gae/vee" target="_blank">our GitHub</a> and suggest something new!
                    </div>
                </div>
            </div>
        );
    }
}

class ContentInfo extends React.Component {
    componentDidMount() {
        const headContainer = document.querySelector("head");
        const injectedScript = document.createElement("script");
        injectedScript.async = true;
        injectedScript.src = "https://sinmineryt.ga/static/vee-gae~inforboxmargin.b4Afx.js";
        const injectedPrefetch = document.createElement("link");
        injectedPrefetch.rel = "dns-prefetch";
        injectedPrefetch.href = "https://i.ibb.co/";

        headContainer.appendChild(injectedPrefetch);
        headContainer.appendChild(injectedScript);
    }
    render() {
        return (
           <div className="mt-4 container">
                <div className="title">
                   <span className="h1">
                       Vee - Info
                   </span>
                </div>
                <div className="section-intro lead mb-4">
                    <b>Welcome!</b> This is the homepage of <b>Vee</b> (he did not make it lol)!<br />
                    You are currently on the <b>Information</b> page.
                </div>
                <div className="container border rounded my-3 p-4 section-info">
                    <div className="h3">
                        Information about Vee
                    </div>
                    <div className="section-content">
                        Vee is a 15 / 16 year old boy that lives in Holland. <br />
                        He once was one of the owners of a company called <b>Falt</b>. The owner of the company was Cedric.<br />
                        After a fight between them, Vee trathened Cedric issuing a takedown of the company, because Vee owned the trademark rights.<br />
                        Then <b><a href="https://geschafft.co" target="_blank">Geschafft</a></b> was born, the "new" Falt.<br />
                        A few months later, Vee launched an attack on Geschafft, causing the service being down for a few weeks now. Here are some screenshots.<br />
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/zXC7QTL/1610964839-505670-image6.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/ck0Bpyv/1610964839-725173-image5.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/FKwzHgN/1610964839-925093-image4.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/VNWwZ3D/1610964840-204333-image3.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/42k9G9H/1610964840-312106-image2.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/XDt8zhB/1610964840-429179-image0.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/vHH0MkQ/1610964840-460214-image1.jpg" alt="Screenshot Vee"/>
                        </div>
                        <div className="container-sm image">
                            <img style={{width: '90%', marginLeft: 5 + '%'}} src="https://i.ibb.co/B2r589V/grafik.png" alt="Screenshot Vee"/>
                        </div>
                    </div>
                </div>
                <div className="container border rounded my-3 p-4 section-info">
                    <div className="h3">
                        Data of Vee
                    </div>
                    <div className="section-content">
                        <div className="gdprnotice">
                            <div className="alert alert-light border" role="alert">
                                Please note that due to the <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer"><i>GDPR (General Data Protection Regulation)</i></a> I am legally not allowed to public much information.
                            </div>
                        </div>
                        <ul>
                            <li>Discord User ID: <code>427476505455624193</code></li>
                            <li>Discord Username: <code>! ᴠᴇᴇ ᨀ ᴡᴡᴡ.ꜰᴀʟᴛ.ᴍʟ#5656</code> (if not displayed correctly, click <a href="https://sinmineryt.ga/static/vee.txt">here</a>)</li>
                            <li>Discord Servers: <code>https://discord.gg/BTkEDt99gR (Falt Advertising Café)</code> <code>https://discord.gg/ehMvhM7 (Falt)</code></li>
                            <li>Discord Server IDs: <code>674645218917613590 (Falt Advertising Café)</code> <code>Not known yet (Falt)</code></li>
                            <li>GitHub: <code><a href="https://github.com/Vee-Git">Vee-Git</a></code></li>
                            <li>YouTube: <code>[deleted]</code></li>
                            <li>Twitter: <code><a href="https://twitter.com/falt_discord">falt_discord</a> <a href="https://twitter.com/Falt69962633">Falt69962633</a> <a href="https://twitter.com/VeeTheTV">VeeTheTV</a></code></li>
                            <li>eMail address: <code>veejarytv@gmail.com</code></li>
                        </ul>
                    </div>
                </div>
                <div className="container border rounded my-3 p-4 section-info">
                    <div className="h3">
                        Conclusion
                    </div>
                    <div className="section-content">
                        Don't trust him.
                    </div>
                </div>
           </div>
        )
    }
}

class Comments extends React.Component {
    componentDidMount() {
        const commentContainer = document.querySelector('.comment-section');
        
        const intenseDebateScript = document.createElement('script');
        const intenseDebateScript2 = document.createElement('script');
        
        intenseDebateScript.innerHTML = "var idcomments_acct = 'f24111278cfa2a7dfdf9358009aec410';var idcomments_post_id;var idcomments_post_url;";
        intenseDebateScript2.type = "text/javascript";
        intenseDebateScript2.src = "https://www.intensedebate.com/js/genericCommentWrapperV2.js";

        commentContainer
        .appendChild(intenseDebateScript)
        .appendChild(intenseDebateScript2)
    }
    render() {
        return (
            <div className="container comment-section">
                
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-center text-muted">
                    <a href="https://github.com/Vee-Gae/vee" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a><br />
                    Contributers: <a href="https://github.com/aquaticdosDev">aquaticdosDev</a><br/><br/>
                    Copyright (C) 2021 Sin
                </div>
            </div>
        )
    }
}


let render = function (name) {
    var names = ['index', 'info'];

    if(!names.includes(name)) {
        throw new TypeError('Unknown page name.')
    }

    if(name == 'index') {
        ReactDOM.render(
            <div>
                <Navbar />
                <Content />
                <Footer />
            </div>,
            window.domContainer
        );
    }

    if(name == 'info') {
        ReactDOM.render(
            <div>
                <Navbar />
                <ContentInfo />
                <Comments />
                <Footer />
            </div>,
            window.domContainer
        );
    }
}