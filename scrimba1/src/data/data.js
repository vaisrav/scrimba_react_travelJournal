import marker from "../assets/location.png"
import japan from "../assets/japan-img.jpg" 
import charminar from "../assets/charminar.jpg"


const entries = [
    {
        entry : {
            id : 1,
            mainImage : {
                src: japan,
                alt: "Mount Fuji"
            },
            markerImage : marker,
            countryName : "japan",
            mapLink : "https://maps.app.goo.gl/KF7KAS6gnJFKpsKd9",
            title : "Mount Fuji",
            date : "12 Jan,2021 - 24 Jan, 2021",
            description : "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        }
    },
    {
        entry : {
            id : 2,
            mainImage : {
                src: charminar, 
                alt: "charminar"
            },
            markerImage : marker,
            countryName : "india",
            mapLink : "https://maps.app.goo.gl/xNMK3B9WvrXBnWKa9",
            title : "charminar",
            date : "15 Apr,2025 - 24 Apr, 2025",
            description : "Charminar is in Hyderabad."
        }
    }
]

export default entries;