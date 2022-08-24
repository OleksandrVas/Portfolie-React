
export const  updateObjectInArray = (items : Array<any>,itemId : number,objectName : any,newObjectProps : any) => {
   return  items.map(u => {
            if (u[objectName] === itemId) {
                return {...u, ...newObjectProps}
            }
            return u
        }
    )
}