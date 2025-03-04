import NavigationBar from "../misc/misc.navbar"
import Footer from "../misc/misc.footer"
import ContactForm from "../pages/pages.contact"
import Index from "../home.index"
import About from "../pages/pages.about"
import Classes from "../pages/pages.classes"
import Training from "../pages/pages.training"
import TrainersGrid from "../pages/pages.trainers"



export default {
    "paths" : [
        {
            "linkName" : "Home",
            "link": "/",
            "filePath": [NavigationBar,Index,Footer]
        },
        {
            "linkName" : "About",
            "link": "/about",
            "filePath": [NavigationBar,About ,TrainersGrid, Footer],
            "cssStyleBackground": "text-white bg-gradient-to-r from-gray-800 to-black"

        },
        {
            "linkName" : "Training",
            "link": "/training",
            "filePath": [NavigationBar, Training ,Footer],
            "cssStyleBackground": "text-white bg-gradient-to-r from-gray-800 to-black"
        },
        {
            "linkName" : "Classes",
            "link": "/classes",
            "filePath": [NavigationBar, Classes,Footer],
            "cssStyleBackground": "text-white bg-gradient-to-r from-gray-800 to-black"
        },
        {
            "linkName" : "Contact",
            "link": "/contact",
            filePath: [NavigationBar, ContactForm,Footer],
            "cssStyleBackground": "text-white bg-gradient-to-r from-gray-800 to-black"
        },
        {
            "linkName" : "Inquiry",
            "link": "/inquire",
            filePath: [NavigationBar,Footer]
        }
    ]
}