import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MainPage() {
  return (
    
<div class="container">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <header>
        <h1>Social Media Management Dashboard</h1>
    </header>
    <div className="main-content">
        <div className="dashboard-info">
          <h2>Welcome to your Social Media Management Dashboard!</h2>
          <p>Here you can manage your social media accounts, schedule posts, and analyze engagement metrics.</p>
        </div>
        <div className="sidebar">
          <h2>Your Social Media Platforms</h2>
          <ul className="nav-links">
            <li>
              <h3><a href="https://www.facebook.com/">Facebook</a></h3>
              <ul className="sub-nav-links">
                <li><a href="https://www.facebook.com/help/389849807718635">Schedule Posts</a></li>
                <li><a href="https://www.facebook.com/business/foresight/insights-tools?content_id=UVPsp9NMrDhgF3H&refsem_smb&utm_termdsa-1633293534642&gclidCjwKCAjw3NyxBhBmEiwAyofDYXIoEbnW4Fs9CppRu0s6bfn21q0Ydp0U1WuDWJgOmbtVqSqusl8bOhoCEdsQAvD_BwE&gad_source=1&gclid=CjwKCAjw3NyxBhBmEiwAyofDYXIoEbnW4Fs9CppRu0s6bfn21q0Ydp0U1WuDWJgOmbtVqSqusl8bOhoCEdsQAvD_BwE">Analytics</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <h3><a href="https://twitter.com/?lang=en">Twitter</a></h3>
              <ul className="sub-nav-links">
                <li><a href="https://buffer.com/library/how-to-schedule-tweets/">Schedule Posts</a></li>
                <li><a href="https://analytics.twitter.com/about">Analytics</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <h3><a href="https://www.instagram.com/">Instagram</a></h3>
              <ul className="sub-nav-links">
                <li><a href="https://help.instagram.com/439971288310029">Schedule Posts</a></li>
                <li><a href="https://help.instagram.com/1533933820244654">Analytics</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <h3><a href="https://www.linkedin.com/">LinkedIn</a></h3>
              <ul className="sub-nav-links">
                <li><a href="https://www.linkedin.com/help/linkedin/answer/a1419179">Schedule Posts</a></li>
                <li><a href="https://business.linkedin.com/marketing-solutions/cx/21/10/reporting-analytics?src=go-pa&trk=sem-ga_campid.20073717112_asid.147321845663_crid.657090454963_kw.linkedin%20analytics%20tools_d.c_tid.kwd-36707281631_n.g_mt.e_geo.9185320&mcid=7059959449221828675&cid=&gad_source=1&gclid=CjwKCAjw3NyxBhBmEiwAyofDYR_OJ8xoFr___glD1_bvVpWlM9xo0dUyUw-y7JDCQSpCpgWrZZ8QGhoCy8MQAvD_BwE&gclsrc=aw.ds">Analytics</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <div>
            <h2>Facebook</h2>
            <p>Total Likes: 500</p>
            <p>Comments Today: 20</p>
            <p>Shares Today: 15</p>
          </div>
          <div>
            <h2>Twitter</h2>
            <p>Total Followers: 300</p>
            <p>Tweets Today: 10</p>
            <p>Retweets Today: 5</p>
          </div>
          <div>
            <h2>Instagram</h2>
            <p>Total Followers: 1000</p>
            <p>Posts Today: 30</p>
            <p>Likes Today: 100</p>
          </div>
          <div>
            <h2>LinkedIn</h2>
            <p>Total Connection: 672</p>
            <p>Posts Today: 30</p>
            <p>Likes Today: 100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <MainPage />;
  }

  return (
    <div className="container1">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Render the component in the 'root' div
ReactDOM.render(<LoginForm />, document.getElementById('root'));