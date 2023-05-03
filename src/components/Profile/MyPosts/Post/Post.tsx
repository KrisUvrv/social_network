import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}
<<<<<<< HEAD

=======
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;