import React, {useState} from 'react';
import userPhoto from '../../assets/images/user-png-default-user-image-png-png.png';
import styles from './users.module.css';
import {NavLink} from 'react-router-dom';
import {UserType} from "../../types/types";
import {Avatar, Button} from "antd";
import type { SizeType } from 'antd/es/config-provider/SizeContext';

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
    const [size] = useState<SizeType>('small')

    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <Avatar size={80} icon={<img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <Button  type="dashed" size={size} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</Button>
                            : <Button  type="dashed" size={size} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>Follow</Button>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
    </div>
}
export default User;