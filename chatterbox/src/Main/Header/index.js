import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './index.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';  
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {openMenu,closeMenu,resize} from "../../modules/Header"
import { push } from 'react-router-redux';
import logo from "../../assets/Icon.png"

class MenuAppBar extends React.Component {
    componentDidMount(){
        window.addEventListener('resize', ()=>this.props.resize());
    }
    componentWillUnmount(){
        window.removeEventListener('resize');
    }
    render() {

        return (
            <div className="Header">
                {
                    (!this.props.phonemode || !this.props.phonemodechat) && 
                    <div className={`buttons-section ${this.props.buttonsClass}`}>
                        <Button raised className="buttons">NEW CHAT</Button>
                        <Button raised className="buttons">NEW GROUP</Button>
                    </div>
                }

                <div>
                    {
                        (!this.props.phonemode || (this.props.phonemode && this.props.phonemodechat)) &&
                        <div onMouseLeave={this.props.closeMenu.bind(this)}  className="profile-section">
                            <div onMouseOver={this.props.openMenu.bind(this)} className="profile-section-id-holder">
                                <div className="profile-section-id-name">Addie Heins</div>
                                <div className="profile-img-holder">
                                    <img className="profile-img profile-user-img" src={logo}/>
                                </div>
                            </div>
                            <div className="profile-section-logo">
                                <div className="profile-img-holder">
                                    <img className="profile-img profile-logo" src={logo}/>
                                </div>
                            </div>
                            {
                                this.props.anchorEl &&
                                <div onMouseOver={this.props.openMenu.bind(this)} onMouseLeave={this.props.closeMenu.bind(this)} className="header-dropdown-menu">
                                    <div className="header-drop-item">
                                        <div onClick={this.props.changeSettings()} className="header-drop-item-name">Settings</div>
                                    </div>
                                    <div className="header-drop-item">
                                        <div onClick={this.props.logout()} className="header-drop-item-name">Log Out</div>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {
                        this.props.phonemode &&
                        <div className="profile-section">
                            <div className="resized-arrow fa fa-chevron-right"/>                        
                        </div>
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    anchorEl: state.header.anchorEl,
    buttonsClass: state.header.buttonsClass,
    phonemode:state.header.phonemode,
    phonemodechat:state.header.phonemodechat,

  })
  
const mapDispatchToProps = dispatch => bindActionCreators({
    openMenu,
    closeMenu,
    resize,
    changeSettings:()=>push("/settings"),
    logout:()=>push("/auth/login")
  }, dispatch)
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuAppBar);
