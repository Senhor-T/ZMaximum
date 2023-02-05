import {useState,useEffect} from 'react'


export const useFetchGenresMovies = (api) =>{
    const [genreAcao,setGenreAcao] = useState([])
    const [genreAventura,setGenreAventura] = useState([])
    const [genreAnimacao,setGenreAnimacao] = useState([])
    const [genreComedia,setGenreComedia] = useState([])
    const [genreCrime,setGenreCrime] = useState([])
    const [genreDocumentario,setGenreDocumentario] = useState([])
    const [genreDrama,setGenreDrama] = useState([])
    const [genreFamilia,setGenreFamilia] = useState([])
    const [genreFantasia,setGenreFantasia] = useState([])
    const [genreHistoria,setGenreHistoria] = useState([])
    const [genreTerror,setGenreTerror] = useState([])
    const [genreMusica,setGenreMusica] = useState([])
    const [genreMisterio,setGenreMisterio] = useState([])
    const [genreRomance,setGenreRomance] = useState([])
    const [genreFiccaocientífica,setGenreFiccaocientífica] = useState([])
    const [genreCinemaTV,setGenreCinemaTV] = useState([])
    const [genreThriller,setGenreThriller] = useState([])
    const [genreGuerra,setGenreGuerra] = useState([])
    const [genreFaroeste,setGenreFaroeste] = useState([])



    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/acao')
            .then((response)=>{
                setGenreAcao(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/aventura')
            .then((response)=>{
                setGenreAventura(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/animacao')
            .then((response)=>{
                setGenreAnimacao(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/comedia')
            .then((response)=>{
                setGenreComedia(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/crime')
            .then((response)=>{
                setGenreCrime(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/documentario')
            .then((response)=>{
                setGenreDocumentario(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/drama')
            .then((response)=>{
                setGenreDrama(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/familia')
            .then((response)=>{
                setGenreFamilia(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/fantasia')
            .then((response)=>{
                setGenreFantasia(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/historia')
            .then((response)=>{
                setGenreHistoria(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/terror')
            .then((response)=>{
                setGenreTerror(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/musica')
            .then((response)=>{
                setGenreMusica(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/misterio')
            .then((response)=>{
                setGenreMisterio(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/romance')
            .then((response)=>{
                setGenreRomance(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/ficcao-cientifica')
            .then((response)=>{
                setGenreFiccaocientífica(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/cinema-tv')
            .then((response)=>{
                setGenreCinemaTV(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/thriller')
            .then((response)=>{
                setGenreThriller(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/guerra')
            .then((response)=>{
                setGenreGuerra(response.data)
            })
        }
        fecthData()
    },[api])

    useEffect(()=>{
        const fecthData = async ()=>{
            await api.get('/post/genre/faroeste')
            .then((response)=>{
                setGenreFaroeste(response.data)
            })
        }
        fecthData()
    },[api])


    return{
        genreAcao,
        genreAventura,
        genreAnimacao,
        genreComedia,
        genreCrime,
        genreDocumentario,
        genreDrama,
        genreFamilia,
        genreFantasia,
        genreHistoria,
        genreTerror,
        genreMusica,
        genreMisterio,
        genreRomance,
        genreFiccaocientífica,
        genreCinemaTV,
        genreThriller,
        genreGuerra,
        genreFaroeste
    }
}