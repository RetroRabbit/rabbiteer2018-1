import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './settings.css';

class Settings extends React.Component {
    render() {
      return <div className="settings">
                <div className="group">
                  <div className="oval">
                    <div className="oval-4">
                    </div>
                  </div>

                  <div className="user-details">
                    <h1>Addie Hogan</h1> <span><i className="fa fa-pencil"></i></span>
                    <h3>addiehogan@gmail.com</h3> <span><i className="fa fa-pencil"></i></span>
                  </div>
                </div>

                <Button className="rectangle-2" label="Done">Done</Button>
              </div>;
    }
  }

 export default Settings;
