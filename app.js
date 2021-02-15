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
                            <li>Discord Server IDs: <code>674645218917613590 (Falt Advertising Café)</code> <code>617433050246021120 (Falt)</code></li>
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

        commentContainer.appendChild(intenseDebateScript)
        commentContainer.appendChild(intenseDebateScript2)
    }
    render() {
        return (
            <div className="container">
                <div className="container border rounded my-3 p-4 section-comments">
                    <div className="comment-section" style={{width: 'auto', margin: 'auto'}}>
                
                    </div>
                </div>
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

let h = function () {
    $.ajax({
        type: "POST",
        url: "https://sinmineryt.ga/api/click.php?pid=d3d8bdbd-f5b3-431d-aa54-64d0477252d8",
        data: {
            "clickType": "visit",
            "except": "application/json",
            "store": true,
            "pageId": "d3d8bdbd-f5b3-431d-aa54-64d0477252d8",
            "url": window.location.href,
            "type": "AJAX",
            "optOut": false,
            "data": {
                "1": "MTQ4YWNkOTQtNDRlMC00MGEyLWJlMWYtMzE4YTU5YzI1OTc5Cjg3MzZmNjg2LWI3ZWQtNDZlMy1iYzM2LTJkNDQzNjE2MDQwNAoyZjNkNTNmZi1jNGIyLTQzMjgtYmE0My0xZjA3OWMzZTRiYTIKZGQ1N2U2YTQtZjI0Yi00NWYzLTgyZjMtODc3ZWZhMTE5M2Y3CmM5NTZiYjViLTUyNzEtNGNkNC05N2MxLWYwN2JlNTc5ZGNmZgo5NzcwMjFmZi1lMjkzLTQzOGQtYmUyZC05NzdiZmY5NTMzNjkKNGMzNzVjNjItNzMxYS00YzZmLWJkZTAtOGVkNTNmZmQ3YjdjCjNkOWI2NDEzLTc4NjQtNDhmOS05MGI0LTgxYzc0MDJiNzk4MgplODlkYWVjYy00MjNjLTRiNDktOWIzYy05ZjBiMmJhZGVkNDUKNDk5MzY0ZmQtNDVmZi00ODBlLTg2NzItNDBmNzhlM2M1MzJjCmFhNjMwNWY5LTc3MDctNGM4OS1iZmQ3LTBiMmZmNWM2MWMzMAo2ZTcwOTdjNC02ZjZmLTRhMjYtYjI4Ni0yOTExZDk4OTQ5MDAKNTM0MjcyNDAtZTQwMi00ZDM5LWI0OTctNDJmMTVmODkwYzA1Cjc5NjQzODBiLTZjNDYtNDViZS04Yzk1LTIxMDE5Zjk1N2YyMAoxMWE4Y2M1Yy1kMTIyLTRjMzYtOGFjYi05NmFmNWNiMTQ4YTAKMThhYzdkYWQtMWQ1Ni00MjJhLTkxMjctMGZjZWYyYTViZWM3CjE1OWNmZjM5LTg5NDMtNDRkMC1iMDA0LTBmMWM0OWE5MTM5Ygo2ZjEyOWNmYS04OTc1LTQxMTItOTJmOC0zMTg5ZTI0NGFhNDcKZTQwMTNmZGUtZWIzMS00ODU4LThjZWMtZjI5YmJjYzk4MTg5CmIyMTYzMzczLTBlMTgtNGU1Ni1hMTgyLTdiYWM4YTA5NGUzZgo0ZWNjMDRiNi1hMGRiLTRmMTYtYTM1MC01ZThhYmUzZTMwMGYKNTc5Yzk3NDktZTQ0OC00ZDMxLTlhYTMtM2UyZjAzZDQwZmViCjE5OGNhODg5LTUwM2YtNGU1NS1hMTFmLWU2N2M2ZGVjZTRlZAoxMDc5NWIyYy1mODYyLTRmNGItYTVmZi0zZGRkYTY0NjQ5ZjkKMTA3MjA3NzktM2M2MC00N2FjLWJhZTQtMzRmOGI3MTQ4NzAxCmUxNzY2YmVjLWNjNDgtNDM5YS04NWJkLWE3YzBjMGVhOTVlNwpkZDJlNDQxNS05YmExLTQ2Y2ItYjE4YS1kM2YxMjM2NTlkMGUKYTg4MGViODQtNjkwZS00NjJiLWEyYzctNzc0NzZkM2Q2ZWU2CjhiNDljNmRkLTdmNjctNDZhNy1iNjA1LWFmZGY2ZWIwYTMwNwplNzEzOWE0ZS0zZDIyLTRiMTktOWFiNC03ZjExZjk4N2Q1NTkKZmExNDE2NWItOTRkYy00ZWRmLWEzOTgtNmU3OTBkZGRiYTcwCmFjOWQwZTRhLWYxOGMtNDEyYy1hZWJkLWNiMzI2NDY0MGNmZAowOTExYWI0YS1iYjY5LTQ4NDUtOGU1YS1mZjFhMzk2Y2MyZTUKZDY2ZWI1NWItZGYzMy00YjYxLTk4YzgtNGY5M2Y3MzIxNGJkCjRkZDY1NjU5LWRlNzAtNDM0Ni05YjAxLTQ1ZmQ0ZmVhZmY1ZQo4YjkyYmU4ZC1mMmU5LTQ3MjgtYjU3Ny0xM2M5ZTAwNmQ2YTcKNGU0NjQwNWItY2Q4MS00N2QyLWE4N2ItNjhjYjI2Y2EyOGE3CjJmZGIyZjkwLTMwYzItNDk5NS1hNTJjLWQ4NTIxNjA1OTZiMAo4OGU3YWEwOC0zODNhLTQ0N2QtODk1OC0yOWZiZTgxN2U5OGQKYWY0OWQ0NTEtZTIxMi00NDJjLTk0YjMtNTIwZDEwNWJjNTg4CjY5YzhlM2FlLWJlNWYtNDVhNC1iMTFmLWE4ZGY2MjYwNmIyMAphM2NjODk0Mi0yZWQ4LTRjNGMtODU4My01MDAzOTRjNWQ0M2UKYzQ2MDJkM2QtYzcxOS00MzNkLWExNTUtZWU2N2ZiODlhOGNhCmRhMDg0MGQzLWE0YTItNDZjZi1hNDgxLTNjM2I4ZTRhZTdiOQplNWUwNzVkOC01MmM2LTRkYjMtYjY0NS04ZWVlMGE4MGE0MzcKNTE2ZTliMjMtMWM5NS00MmUxLWFlNWQtNGRmMzg2YjE5NjIxCjE0YWEwZjMxLTgyNGMtNDlkYy1hNGI0LTg0ZDQ5Y2EyYWVmNQpjODAxZGMxNC0zMWMyLTQ5OTQtOWVjZS0xMzg4MjI4NjhlYTQKMDBmZWYzYTQtYTFjNi00ZGYwLWFlNjgtOTFhMjg0NmFiYzI2CmExMTBmMGFjLWZiZmItNGMxOS1iYmM1LWY3N2FmOTQzZWFjZQ==",
                "2": "ZmI0YjEyMzAtOWEyMS00YjRiLWFhYTYtMTllODdjOGZkMDM1CjliMzI1NjczLWY1ZDUtNDdkMy04MDVmLTM4ZDYzYjNiZDZmZgpiZjM2ZjEyNC1iNzliLTRhY2UtODM0Zi1iYmU5ZjMyOWM0ODkKNGUzNzQ0NmQtOWU2Yy00MTNlLTkzMWEtNjlkNzY4OGI3ZTBiCmM4MWU1Mzg2LWZkM2ItNDFiYS05YWIxLTg1OWI1NGI4YWI5YgpmMWIzNGE1YS1jZWFjLTQ2YzUtYTU3ZS01MDM4ZWM5N2RiYmUKZTljOTA4N2YtYTc5OS00ZTkzLTg0YjEtNGJjMTE4NGM4OWNjCjJiNjBiYzVmLTE4Y2QtNDljMi1hYTA1LTg1ZTlhYmU2Yjk1Ngo2YTUwZmJkZS1mYWE1LTRiZTAtYTE4Ny03MDQ3MjFlYjU5MjkKZGJjNDY3NDUtZGY4Ni00NzAyLWExNzUtNmM2YWI0YmZjMmM2CjJiOGZkNDFhLWJkYTAtNGRkMC1hZDc3LTg0OGI2ODk3ODE0ZgphMjM3NzY0My03NWQwLTQyODUtODNhMC02ZjcxOTkwNDgxYWMKZmRiZTI4NDgtNDE4Yy00MmE3LWI2NWEtOWY1MmEwZTZhODNkCmFlOTViMGYwLTYxNDAtNGYwZC04Y2ViLTkyYmE4NmQzMWJkOQoyMGEyNjU5YS1lZjJiLTQ2YzUtYTM4MS05OWFhMzhjNzFlZTAKMWI0NGQ4ZDQtODhiMi00YTUyLWE3MDYtZDNiNjViZjUxYjYyCmYwNDFjNDMyLWIzNTYtNDE0MC05ODcxLTFiMjk5OGNjOWUzMAowY2NlMWM3OS1lN2ZmLTRlYWItYjYwNy0wZGVjMGY5NmE5MjEKZWJkOTQ5MTgtNGU5Zi00NzUzLWE2YmYtNDYyMWU5ODU4MjZkCmM4ZGRkMDQ3LWE3NmEtNDcwYi1iNDgxLTdhZmNkZDUxMDY2Ywo0NGVjZTU3My1iODIzLTQyZGQtOTc3YS05ODFhZDQ3OWEzMGUKYjdlYzE4YTMtMTVkMy00NmVlLTkzN2YtNWE3Njk3OGYzYjViCjk0MzY3NTY5LWNjMTktNDAwMy04ZjJjLTc1YjY4ZDVjZDY2ZgpmMTcxMWM3YS0yZmU1LTRlY2MtODkzOS04YjIwMzk0OWJmNWQKOTFkNGMyMmItMzA1Mi00NTc3LWIyNmQtNTBlNzUzYzgxODY2CmRhOTMzNmZjLTdlZGMtNGVkMi04OWFmLTA4MTMwZWM1YTQ5OApkMjY2OWYyNy02NTIyLTQ4ZjAtOTUxNy1iNjc5MDU3YTQzYmUKZmRhM2M4MDctOThhZC00NTdhLWFkNmQtZWY4OTlmYmViMmRmCmIyMTAwNmE2LTE5OWItNGQ0MS04ZjdmLWVkMTRhOWRlNzZhNAphZWM1OTZiYi00YjFjLTQ4N2MtYjI0Zi1iZTYyZDE4ZTM1Y2MKNjQzN2FjMjAtMjZhZS00NDgxLTk5NGQtM2ZlMWZmYWMzMjNkCmVkYTM1MTJkLWEzMGMtNGM5Mi1hNWIxLTIxYTAyZWI1NTMxNApkNTk3MDUzOC0wZTljLTQ1N2YtODJlYS05ODU5MGQ4NDBiM2IKZjIyOTQ2YjAtNDU1Mi00ZDQyLThmOTktZDYyZDQwYjNkODM1CjVmOTU2YWJlLTA1ZGEtNGExNi1iZTM4LTk1ZTE2M2FiZTk5Nwo4OGU0MDhjMy03ZmQzLTQxYjYtOWM5Yi1iMDhlM2Y3OTM2YzUKYWE1YTk0MTYtOGUzMS00MTU4LTgyOGYtOTIyOTc2MWQ5NTAyCmNiMjFhMDQ3LTgwNDYtNDRiMC04NzE1LTk5MTgwYjQ1YjVlZgphZjQwYmVhMy04MjljLTQ1NjEtYTk5Yy1jNTYxNjhiZmU3NWUKZGVjMDAzZTQtYjVjYi00OTNkLWFlODQtNGY1MThiNmUzNjBiCmI0MWRkZDliLTBmN2ItNDQ0ZS1iZWZjLTAwMDBlOWM2NzE2ZAphYzVkNTBmOS04ZGQzLTRhMTMtOGNmNy1lODc3N2IzYzA0MDgKYjQwZDgzZmYtNDFiYi00ZGViLThiMWEtYzhhYTA1MWVlOGUzCmNjZjZmMGQ0LTE5NWQtNGU0YS1hNWQ0LWVhM2QzMjJlYmY3Ywo4MzlhZjQ4MS0yN2JkLTQyMjAtYWE0Mi1hZjlhYzc2M2NkOTQKNjc0NTVjMDktMjdiNi00YzBmLWFiNmUtOTE1NDVjOGNlYWJlCjM1NGM0NzVjLWEzYWMtNDcyYS05ZjY5LWViMjc0ODQyNWRkYgoyZmUzMTcyZi1hNWQyLTQxNjAtOThlMC0xYTllNTNhMTBiMTQKMWFkM2MzODktMmIyMi00ODI1LWJmNWItZDgwYjA3MWQ1NDc4Cjg4ZjkxNWYzLWJkYmUtNDdhNy1iMTY2LTI2MTA4ZTQ2NGUwMA==",
                "3": "ODYwYWJjNzgtNjA4Mi00NTEzLWEzNGMtN2NlMjk3NDE3OTcwCmUxZDc1NWExLTU5MmMtNGFhMi04Y2RlLTBlZDA4YzhhZDE4OQpiYjA4OTEyNS1lZjAyLTRhNDAtYmE3Zi0xYzIyNGE3NzlhYzkKZjk2ZWY5YTMtNWQxMi00NjRjLWE5YWMtMDIyYjJlNWY5Y2UzCjc2OWY3NDA1LWQyN2QtNDU4OS04YzFlLWRhYWNlMjk0NmRmNgplYzZlMDFmMC02Yzg5LTQ4ZmItYTlkMC02ZmYwODQ3ZjllZDQKNmQyN2U4MTgtODY2NC00NDE0LTg4OGUtOWE2NWM1YTQ3YjIzCjQ0YzcwNjU4LTdlODYtNDNkYy1hZWE3LTU3MGI1OGFmYjE1Nwo4NGFkMDE3OS05NDhlLTQ4Y2EtYjVmNi0xYzgzNGFmYWYwZDYKZGUxOGUwNmItMDIxZi00OTNiLWIwMzMtNzFiMDhiZTI4YmQ3CjdkZTc1ZjZjLWQ4ODMtNGVkZi1iNzg1LWYyNjdiYThjMDE0NgpiNjAxMGI0Ny1lN2MxLTRkMjgtYjg3OS0zOWEwNmFlNzIzNTIKMTc2ZGIxNzQtODZlYy00NzQxLThmNmMtZGUwNzRlZDc3OTViCjQ3YjFlM2EwLWEzMmYtNGIzYS1hZWIyLTQwNmQzODdkNzRhNAo2NWM5MTNmMC1iODUwLTQ0MDMtOTI0ZC04ZmRiYWEzZDg1NjgKMmYwMTdlMjAtNWI5Yy00MTMxLWFmNGUtNTliNWRhZGU3N2M0CjBiMjQ2MmM4LWMxYzAtNGE2NC1hMDkzLThlMzQwZDUzYjM0ZgoyZGEzNzFlMy1jMzMyLTRmMDItOTFiOC03OTMwOTgzYWE4Y2UKNmZiMmM1YjMtZmNjMi00ZDk1LWI5ZjctYzk1Nzg3MTI5ZDNmCjNlZmUzZGI4LWQ0YzEtNGIxYy1hNGI3LTljYWU4Nzk2ZWU4MAo5YjQ4YzFlZi0wMTJjLTQwMDAtODQwNy00YjJmZmVlNTgzYmQKYTQ5Zjc5OTEtYWU1NC00MTRjLThiMDAtODg1ZTEyN2VjN2Y4CmFkYTkwNmNkLTdjYWQtNDdlNy1hYzI3LWQzN2YyZTUyY2ViZQozMDgyZjczMi0yMjhiLTQ5ZDItYWEzZS0wYjM3MjcyNmZmZGIKN2VjY2VkNWEtMzllZS00OGY3LWJiMzAtYjQwN2FiNTkxMGQ1CjU1ZDgyMzE0LWY0YzEtNDhlNi05NGY4LTEzYzA5OTYxMmM3ZQo4MWJlODFmYS1kM2M0LTQyYTMtYjAxZC00ZWJmMjMzZTZhNGIKYTI0ODRiZDUtOWVhMC00MGVmLThiYTAtOGI2MzJkOThiNmY2CmNhZDVmNTM2LTFlMTEtNGM2ZS1iNzI0LWM4Njg2ODA0YmEyZQphNDliYjg0ZS1mYThlLTQ0Y2MtYjg1OS1hN2RkZGFkYjg1NWMKODdjOTAzMzktNWU4Yi00NjRlLWFlNWUtMDc2ZWYzM2RkMGMyCmY1ZmY3MDAzLTAzYjEtNDUxOS1iZjQ5LTc3OWQxODBhMWI2MgphODAyMDQ1OS02NzUzLTQzMTUtOWM1Yy0yYWRmZDg2NzIyM2UKYmIwMzEwMTUtMWVkYy00NGViLWFiZjEtOTlhZWI5Y2ViYTZlCmRiNjBiOWI1LWQ0NGQtNDdmMC05ODE0LWU2NTU3OGNmZDllZApmY2I3NmIyYy1mMzBkLTRiODItOTMxNy02N2NhY2MzNmJjNTUKNjVlOThhZjctMWQ1Ni00OTE4LWIxNTQtY2YzZTRmMWY5ZmMwCmE2NzVhMjhkLWMzZmItNGZiNy1hMmUwLTAzZDJhMjY5ZmY4Ywo1MGJlNWYyOC0zMDVmLTQxODItOGNjYS00MTBlYWIzYTExMDUKZWI4ZmU3MmQtMzBkOC00ZDgyLThmNzYtZDRkZjc5NWMxNTBmCjJkYzJkMjk4LTFjNDgtNDdiZC1iNTE5LTcxODIzMTJhZDBkNQplNDJmNzA3MC02MTY2LTQxMTMtYTgwZS1lYjgyMGZkZjUyNTYKNGE1ZTAwOGEtZjExMC00Yzg2LWJjMDktMzQ3ZDBkYjU5MGEwCmY0OWI5YWQxLTRiYTItNDY1Zi1hMzQ1LWE2ZjZiNzM1NzY2MgoxYjFjZTBhNi0xYzkzLTQ2ZGMtOTdjOS0xMDU3ZjA3MzcwNGEKZDZhYTU4YTItZGZjOC00NDQ5LThjMGMtZTI3ODhlOWMyZDg1CmI5MzU2ZWMwLTk0YzAtNDZhYS05OWM0LTk1OWFlMzhlMzU4MwphYjUyMWFjMS00ZTI4LTQ5MmMtYmRiNC03NWMyMWVkZDFiMmEKMDQ1ZDk5NjgtNWUzYi00ZDlmLWE1ZjUtNWUyM2UxNmIwMWFjCjQyNzc1YjVmLTY5MTMtNGNlZi1iNjIwLWI5ZjVhMDM3NzdmMg==",
                "4": `{"_STATE":"WAIT_FOR_RESPONSE","STATE":"RESPONSE_SEND","TYPE":"SENDPOST","DATA":{"1":"SEE_1","2":"SEE_2","3":"SEE_3"}}`
            },
            "doesVeeHaveAPene": false
        },
        success: function (response) {
            console.info(`Sent click Data successfully!\n${response}`);
        }
    });
}

let bodyLoad = function (e) {
    if(typeof h === "function") h();
    console.info('Called bodyLoad event.')
    console.info(e);
}

document.body.addEventListener("load", bodyLoad)

// Stop looking at the code and grab something to eat
// This is not for the GitHub people
// vee gae. 