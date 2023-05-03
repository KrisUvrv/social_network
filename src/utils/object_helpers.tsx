import {UserType} from "../types/types";

export const updateObjectInArray: <T, I>(items: Array<UserType>, itemId: number, objPropName: string, newObjProps: { followed: boolean }) => T[] = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
