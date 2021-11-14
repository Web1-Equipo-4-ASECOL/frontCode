import React from 'react';
const news={
    new1:{
        "nombre": "TapTapp, la app para contratar servicios de aseo doméstico y limpieza, llega a Colombia",
        "descripcion": "Con el objetivo de impulsar a las más de 680.000 trabajadoras de servicio doméstico que actualmente hay en el país...",
        "link": "https://www.larepublica.co/empresas/taptapp-la-app-para-contratar-servicios-de-aseo-domestico-y-limpieza-llega-a-colombia-3219439",
        "poster": "https://img.lalr.co/cms/2021/08/19105758/WhatsApp-Image-2021-08-19-at-9.11.10-AM.jpeg"
    },
    new2:{
        "nombre": "Lanzamos una plataforma para que las empresas puedan comprar paquetes de limpieza",
        "descripcion": "La compañía de servicios de limpieza ve un panorama positivo para este año y espera aumentar su número de colaboradoras a 800...",
        "link": "https://www.larepublica.co/empresas/los-nuevos-cierres-y-olas-de-contagio-generan-temor-en-pedir-servicios-de-limpieza-3162710",
        "poster": "https://img.lalr.co/cms/2021/04/30170100/COLFUTURO_Juan-Sebasti%C3%A1n-Cadavid-Salom_Bogot%C3%A1_004.jpg?size=sm"
    },
    new3:{
        "nombre": "Aromatel lanzó ecobotella con la que ahorrará 2,8 millones de envases de plástico virgen",
        "descripcion": "Este nuevo producto hace parte del objetivo de la compañía de tener empaques reutilizables, reciclables o compostables para 2025...",
        "link": "https://www.larepublica.co/responsabilidad-social/aromatel-lanzo-ecobotella-con-la-que-ahorrara-28-millones-de-envases-de-plastico-virgen-3221678",
        "poster": "https://img.lalr.co/cms/2021/08/24105312/AMT-Green-PackShot-Manzana-ET-900ml.png?size=sm"
    },
    new4:{
        "nombre": "Invima otorgó la NSO de los productos de Clorox que eliminan el virus del covid-19",
        "descripcion": "La entidad recibió pruebas de los productos de la marca y determinó que cumplen con los estándares señalados en la norma vigente...",
        "link": "https://www.larepublica.co/empresas/invima-aprueba-la-efectividad-de-productos-clorox-para-eliminar-el-covid-en-superficies-3162375",
        "poster": "https://img.lalr.co/cms/2021/04/05115444/WhatsApp-Image-2021-05-04-at-2.15.11-PM.jpeg?size=sm"
    }
}
const MontarNoticia = (props) =>{
    return(
        <div className="column">
            <div className="card">
                <div className="wrapper">
                    <div className="image">
                       <img className="book-image" src={props.news.poster} alt={props.news.nombre}/>
                    </div>
                    <div className="data">
                        <div className="content">
                            <h1 className="title">{props.news.nombre}</h1>
                            <p className="text">{props.news.descripcion}</p>
                            <a className="news-btn" href={props.news.link} target="_blank" rel="noreferrer">Leer más</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>       
    );
}
function TheNews() {
    return ( 
        <section className="news" id="news">
            <h1 className="heading">Noticias</h1>
            <div className="row">
                <MontarNoticia news={news.new1}/>
                <MontarNoticia news={news.new2}/>
                <MontarNoticia news={news.new3}/>
                <MontarNoticia news={news.new4}/>
            </div>
        </section>
    );
}
export default TheNews;