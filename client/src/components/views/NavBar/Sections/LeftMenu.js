import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)
  if (user.userData && !user.userData.isAuth){
    return (
      <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>About Us</span>}>
        <MenuItemGroup title="Who are we ?">
          <Menu.Item key="setting:1"><a href="/team">Team</a></Menu.Item>
          <Menu.Item key="setting:2"><a href="/service">Our Services</a></Menu.Item>
          <Menu.Item key="setting:3"><a href="/reviews">Reviews</a></Menu.Item>
          <Menu.Item key="setting:4"><a href="/contacts">Contact Us</a></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
    )
  }else{
    if(user.userData && user.userData.isAdmin){
      return (
        <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu title={<span>About Us</span>}>
          <MenuItemGroup title="Who are we ?">
            <Menu.Item key="setting:1"><Link to="/team">Team</Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to="/service">Our Services</Link></Menu.Item>
            <Menu.Item key="setting:3"><Link to="/reviews">Reviews</Link></Menu.Item>
            <Menu.Item key="setting:4"><Link to="/contacts">Contact Us</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="setting:5">
          <Link to="/orderlist">Orders</Link>
        </Menu.Item>
      </Menu>
      )
    }else{
      return (
        <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu title={<span>About Us</span>}>
          <MenuItemGroup title="Who are we ?">
            <Menu.Item key="setting:1"><Link to="/team">Team</Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to="/service">Our Services</Link></Menu.Item>
            <Menu.Item key="setting:3"><Link to="/reviews">Reviews</Link></Menu.Item>
            <Menu.Item key="setting:4"><Link to="/contacts">Contact Us</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
      )
    }
  }
}

export default LeftMenu
