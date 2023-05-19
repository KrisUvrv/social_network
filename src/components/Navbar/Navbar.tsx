import React from "react";
import {NavLink} from "react-router-dom";
import {
    FireOutlined,
    MessageOutlined,
    PlayCircleOutlined,
    SlidersOutlined,
    StarOutlined,
    UserOutlined
} from "@ant-design/icons";

export const navigationItems = [
    {
        icon: StarOutlined,
        label: <NavLink to="/profile">Profile</NavLink>
    },

    {
        icon: MessageOutlined,
        label: <NavLink to="/dialogs">Messages</NavLink>
    },
    {
        icon: UserOutlined,
        label: <NavLink to="/users">Users</NavLink>
    },
    {
        icon: FireOutlined,
        label: <NavLink to="/news">News</NavLink>
    },
    {
        icon: PlayCircleOutlined,
        label: <NavLink to="/music">Music</NavLink>
    },
    {
        icon: SlidersOutlined,
        label: <NavLink to="/settings">Settings</NavLink>
    },
]