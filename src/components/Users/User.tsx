import React from 'react';
import userPhoto from '../../assets/images/user-png-default-user-image-png-png.png';
import styles from './users.module.css';
import {NavLink} from 'react-router-dom';
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
<<<<<<< HEAD
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

=======
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
let User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>Follow</button>}
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