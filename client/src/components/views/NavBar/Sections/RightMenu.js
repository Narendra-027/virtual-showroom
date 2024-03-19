/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`https://virtual-showroom.onrender.com/${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    if(user.userData && user.userData.isAdmin){
      return (
        <Menu mode={props.mode}>
  
          {/* <Menu.Item key="history">
            <a href="/history">My Purchases</a>
          </Menu.Item> */}
  
          <Menu.Item key="upload">
            <Link to="/product/upload">Upload</Link>
          </Menu.Item>
  
          {/* <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
            <Badge count={user.userData && user.userData.cart.length}>
              <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
                <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
              </a>
            </Badge>
          </Menu.Item> */}
  
  
          <Menu.Item key="logout">
            <a onClick={logoutHandler}>Logout</a>
          </Menu.Item>
        </Menu>
      )
    }else{
      return (
        <Menu mode={props.mode}>
  
          <Menu.Item key="history">
            <Link to="/history">My Purchases</Link>
          </Menu.Item>
  
          {/* <Menu.Item key="upload">
            <a href="/product/upload">Upload</a>
          </Menu.Item> */}
  
          <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
            <Badge count={user.userData && user.userData.cart.length}>
              <Link to="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
                <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
              </Link>
            </Badge>
          </Menu.Item>
  
  
          <Menu.Item key="logout">
            <a onClick={logoutHandler}>Logout</a>
          </Menu.Item>
        </Menu>
      )
    }
  }
}

export default withRouter(RightMenu);

