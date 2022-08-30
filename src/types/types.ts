export type NameOfUserType = {
    id: number,
    name: string,
    birthday: string,
    position: string,
    job: string,
}
export type PostDataType = {
    message: string,
    id: number,
    likesCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotoType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe : string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos : PhotoType
}

export type UserType = {
    id : number,
    name : string ,
    status : string ,
    photos : PhotoType ,
    followed : boolean ,
}