const dictionaries = {
    'en': ()=>import("./dictionaries/en.json").then(r=>r.default),
    'sv': ()=>import("./dictionaries/sv.json").then(r=>r.default)
}

export const getDictionary = (lang)=>{
    return dictionaries[lang]();
}