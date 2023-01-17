export enum TypeNotification {
    SUCCESS,
    ERROR,
    ATTENTION
}

export default interface INotification {
    title: string,
    text: string,
    type: TypeNotification,
    id: number
}