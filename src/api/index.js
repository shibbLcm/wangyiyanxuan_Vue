import ajax from "./ajax"

const BASE="/api"

export const reqCategoryArr=()=>ajax("/category")

export const reqFindMoreArr=()=>ajax("/findmore")
