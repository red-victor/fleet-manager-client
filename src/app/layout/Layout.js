import { useEffect } from "react";
import BackgroundPattern from "../../assets/media/patterns/header-bg.jpg"
import Breadcrumbs from "./Breadcrumbs";
import TopBar from "./TopBar/TopBar";

const Layout = ({ children }) => {
    useEffect(()  => {
        addBodyClasses();
        
        return () => removeBodyClasses();
    });

    const addBodyClasses = () => {
        document.body.classList.add('header-fixed');
        document.body.classList.add('header-tablet-and-mobile-fixed');
        document.body.classList.add('toolbar-enabled');
        document.body.style.backgroundImage = `url(${BackgroundPattern})`
    };

    const removeBodyClasses = () => {
        document.body.classList.remove('header-fixed');
        document.body.classList.remove('header-tablet-and-mobile-fixed');
        document.body.classList.remove('toolbar-enabled');
        document.body.style.backgroundImage = 'initial';
    };

    const generateBreadcrumbs = () => {
        const here = window.location.href.split('/').slice(3);
        // console.log(here)
        const parts = [];
        // console.log(parts)

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    
        for (let i = 0; i < here.length; i++) {
            const part = here[i];
            // console.log(part)
            const text = capitalize(decodeURIComponent(part).toLowerCase().split('.')[0]);
            // console.log(text)
            const link = '/' + here.slice(0, i + 1).join('/');
            // console.log(link)
            if (text !== "")
                parts.push({"title": text, "to": link});
        }

        // console.log(parts)
        return parts
    }

    const links = generateBreadcrumbs();

    const breadcrumbsOptions = {
        title: links.length > 0 ? links[links.length - 1].title : "Home",
        links
    }

    return (
		<div className="d-flex flex-column flex-root">
			<div className="page d-flex flex-row flex-column-fluid">
				<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<TopBar />					
            		{links.length > 0 && <Breadcrumbs options={breadcrumbsOptions}/>}
                    {children}

                </div>
            </div>
        </div>
    )
}

export default Layout;