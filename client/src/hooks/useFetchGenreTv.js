import {useState,useEffect} from 'react'

export const useFetchGenreTv = (api) =>{

    const [animacao,setAnimacao] = useState([])
    const [action,setAction] = useState([])
    const [comedia,setComedia] = useState([])
    const [crime,setCrime] = useState([])
    const [documentario,setDocumentario] = useState([])
    const [drama,setDrama] = useState([])
    const [familia,setFamilia] = useState([])
    const [misterio,setMisterio] = useState([])
    const [reality,setReality] = useState([])
    const [sciFiFantasy,setSciFiFantasy] = useState([])
    const [talk,setTalk] = useState([])
    const [warPolitics,setWarPolitics] = useState([])
    const [faroeste,setFaroeste] = useState([])
    const [kids,setKids] = useState([])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/animacao')
            .then((response)=>{
                setAnimacao(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/action')
            .then((response)=>{
                setAction(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/comedia')
            .then((response)=>{
                setComedia(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/crime')
            .then((response)=>{
                setCrime(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/documentario')
            .then((response)=>{
                setDocumentario(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/drama')
            .then((response)=>{
                setDrama(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/familia')
            .then((response)=>{
                setFamilia(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/misterio')
            .then((response)=>{
                setMisterio(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/sci-fi-fantasy')
            .then((response)=>{
                setSciFiFantasy(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/talk')
            .then((response)=>{
                setTalk(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/war-politics')
            .then((response)=>{
                setWarPolitics(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/faroeste')
            .then((response)=>{
                setFaroeste(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/tv/kids')
            .then((response)=>{
                setKids(response.data)
            })
        }
        fecthData()
    },[api])


    return{
        animacao,
        action,
        comedia,
        crime,
        documentario,
        drama,
        familia,
        misterio,
        reality,
        sciFiFantasy,
        talk,
        warPolitics,
        faroeste,
        kids
    }
}