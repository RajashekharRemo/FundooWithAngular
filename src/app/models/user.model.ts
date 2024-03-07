export interface User{
    id:number;
    first_Name: string;
    last_Name:string;
    email:string;
    password:string;
}

export interface Notes{
    id:number,
    title:string,
    description:string,
    color: string, 
    files: string,
    reminder: Date,
    isArchive: boolean,
    isPinned: boolean,
    isTrash: boolean,
    userId: number
}