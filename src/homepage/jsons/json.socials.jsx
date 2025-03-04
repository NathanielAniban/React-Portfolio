import { Facebook, Instagram } from "lucide-react";

export default {
    Socials: [
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100092087011391",
            icon: Facebook,
            cssStyle: `bg-blue-700 hover:bg-blue-800 active:bg-blue-900`
        },
        {
            name: "Instagram",
            url: "",
            icon: Instagram,
            cssStyle: `bg-gradient-to-r from-violet-600 to-red-500
                hover:from-violet-700 hover:to-red-600
                active:from-violet-800 active:to-red-700`
        }
    ]
};