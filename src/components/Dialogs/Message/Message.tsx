import React from "react";
import s from './../Dialogs.module.css';

type PropsType = {
    message: string
}
<<<<<<< HEAD

=======
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
const Message: React.FC<PropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;