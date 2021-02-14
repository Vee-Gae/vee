const domContainer = document.querySelector('#app');

class Resources extends React.Component {
    render() {
        return (
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
            </>
        );
    }
}

class Navbar extends React.Component {
    render() {
      return (
        <>
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
                    <a className="nav-link active" aria-current="page" href="/vee">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/vee/info">
                      What's that?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/vee/penis">
                      PENIS.
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="/vee/not-gae"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      if you can click this vee is not gae
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
  }
  
class Content extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="title">
                    <span className="h1">
                        Vee - Homepage
                    </span>
                </div>
                <div className="section-intro lead">
                    <b>Welcome!</b> This is the homepage of <b>Vee</b> (Not really, Sin did this)!
                </div>
                <div className="container border section-what">
                    <span className="h3">
                        What's that?
                    </span>
                    <div className="section-content">
                        Vee is a human (I think) that is an asshole and really likes to destroy stuff. <a href="/vee/info">Read more...</a>
                    </div>
                </div>
                <div className="container border section-penis">
                    <span className="h3">
                        PENIS.
                    </span>
                    <div className="section-content">
                        he does not have that lmao <a href="/vee/penis">Read more...</a>
                    </div>
                </div>
                <div className="container border section-help">
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

class Footer extends React.Component {
    render() {
        return (
            <div className="container border">
                <div className="text-center">
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