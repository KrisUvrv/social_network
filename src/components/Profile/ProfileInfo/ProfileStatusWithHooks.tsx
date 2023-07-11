import React, {ChangeEvent, useEffect, useState} from "react";
import {Badge, Descriptions} from "antd";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <Descriptions>
                        <Descriptions.Item label="Status" span={3}>
                            <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                        </Descriptions.Item>
                    </Descriptions>

                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;